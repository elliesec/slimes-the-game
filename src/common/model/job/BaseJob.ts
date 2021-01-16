import cuid from 'cuid';
import { Callback, DoubleCallback } from '../../functions';
import { Job, Task } from '../../redux/job/jobState';
import { Serializable } from '../../types';
import { log } from '../../util/Log';
import { BaseTask } from './BaseTask';

export abstract class BaseJob<C = {}, R = void> implements Serializable<Job> {
    private readonly tasks: BaseTask[];
    private readonly listeners: Array<DoubleCallback<Job, Task>> = [];
    private readonly jobPromise: Promise<R>;
    private promiseResolve: Callback<R>;
    private promiseReject: Callback<any>;
    protected readonly id = cuid();

    public constructor(protected readonly config?: C) {
        this.tasks = this.createTasks(config).slice();
        this.tasks.forEach((task) => {
            task.onChange((task) => this.notify(task));
        });
        this.jobPromise = new Promise((resolve, reject) => {
            this.promiseResolve = resolve;
            this.promiseReject = reject;
            this.waitForTasks();
        });
    }

    public serialize(): Job {
        return {
            id: this.id,
            tasks: this.tasks.map((task) => task.serialize()),
        };
    }

    public onChange(callback: DoubleCallback<Job, Task>): this {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        } else {
            log.warn(`BaseJob.onChange called with invalid callback`, callback);
        }
        return this;
    }

    public promise(): Promise<R> {
        return this.jobPromise;
    }

    public destroy(): void {
        this.listeners.length = 0;
        this.tasks.forEach((task) => task.destroy());
    }

    protected abstract createTasks(config?: C): BaseTask[];

    protected abstract getResult(completedTasks: Task[]): R;

    protected notify(task: Task): void {
        this.listeners.forEach((callback) => callback(this.serialize(), task));
    }

    private async waitForTasks(): Promise<void> {
        try {
            const completedTasks = await Promise.all(this.tasks.map((task) => task.promise()));
            const result = this.getResult(completedTasks);
            this.promiseResolve(result);
        } catch (err) {
            this.promiseReject(err);
        }
    }
}
