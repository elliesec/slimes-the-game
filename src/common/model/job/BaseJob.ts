import { Job, Task } from '../../redux/job/jobState';
import cuid from 'cuid';
import { Serializable } from '../../types';
import { BaseTask } from './BaseTask';
import { DoubleCallback } from '../../functions';
import { log } from '../../util/Log';

export abstract class BaseJob<C = {}> implements Serializable<Job> {
    private readonly tasks: BaseTask[];
    private readonly listeners: Array<DoubleCallback<Job, Task>> = [];
    protected readonly id = cuid();

    public constructor(protected readonly config?: C) {
        this.tasks = this.createTasks(config).slice();
        this.tasks.forEach((task) => {
            task.onChange((task) => this.notify(task));
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

    public destroy(): void {
        this.listeners.length = 0;
        this.tasks.forEach((task) => task.destroy());
    }

    protected abstract createTasks(config?: C): BaseTask[];

    protected notify(task: Task): void {
        this.listeners.forEach((callback) => callback(this.serialize(), task));
    }
}
