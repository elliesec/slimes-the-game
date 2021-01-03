import cuid from 'cuid';
import { Serializable } from '../../types';
import { Task, TaskStatus } from '../../redux/job/jobState';
import { Callback } from '../../functions';
import { log } from '../../util/Log';

export abstract class BaseTask implements Serializable<Task> {
    protected readonly id = cuid();
    private readonly listeners: Array<Callback<Task>> = [];
    private status = TaskStatus.PENDING;

    public constructor(protected readonly description: string) {}

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

    public destroy(): void {
        this.listeners.length = 0;
    }

    protected complete(): void {
        this.status = TaskStatus.COMPLETE;
        this.notify();
    }

    protected fail(): void {
        this.status = TaskStatus.FAILED;
        this.notify();
    }

    protected notify(): void {
        this.listeners.forEach((callback) => callback(this.serialize()));
    }
}
