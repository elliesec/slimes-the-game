import cuid from 'cuid';
import { Callback } from '../../functions';
import { Task, TaskStatus } from '../../redux/job/jobState';
import { Serializable } from '../../types';
import { log } from '../../util/Log';

export abstract class BaseTask implements Serializable<Task> {
    protected readonly id = cuid();
    private readonly listeners: Array<Callback<Task>> = [];
    private readonly taskPromise: Promise<Task>;
    private promiseResolve: Callback<Task>;
    private promiseReject: Callback<any>;
    private status = TaskStatus.PENDING;

    public constructor(
        protected readonly description: string,
        protected readonly dependencies: BaseTask[] = []
    ) {
        this.taskPromise = new Promise((resolve, reject) => {
            this.promiseResolve = resolve;
            this.promiseReject = reject;
            setTimeout(() => this.runAfterDependencies());
        });
    }

    public serialize(): Task {
        return {
            id: this.id,
            description: this.description,
            status: this.status,
        };
    }

    public onChange(callback: Callback<Task>): this {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        } else {
            log.warn(`BaseTask.onChange called with invalid callback`, callback);
        }
        return this;
    }

    public promise(): Promise<Task> {
        return this.taskPromise;
    }

    public destroy(): void {
        this.listeners.length = 0;
    }

    protected abstract run(): void;

    protected complete(): void {
        log.debug(`Task "${this.description}" completed successfully`);
        this.status = TaskStatus.COMPLETE;
        this.promiseResolve(this.serialize());
        this.notify();
    }

    protected fail(err?: any): void {
        log.debug(`Task "${this.description}" failed`);
        this.status = TaskStatus.FAILED;
        this.promiseReject(err);
        this.notify();
    }

    protected notify(): void {
        this.listeners.forEach((callback) => callback(this.serialize()));
    }

    private async runAfterDependencies(): Promise<void> {
        await Promise.all(this.dependencies.map((dep) => dep.promise())).then(() => {
            log.debug(`Running task "${this.description}"`);
            this.run();
        });
    }
}
