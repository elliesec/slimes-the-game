import { BehaviorSubject, Observable } from 'rxjs';
import { log } from '../util/Log';
import { Task } from './Task';
import { TaskProgress } from './TaskProgress';

export abstract class AtomicTask extends Task {
    protected complete = false;
    protected subject: BehaviorSubject<TaskProgress>;

    public execute(): Observable<TaskProgress> {
        log.debug(`[${this.id}] Executing atomic task "${this.name}"`);
        this.subject = new BehaviorSubject(this.getProgress());
        this.doTaskAsync();
        return this.subject;
    }

    public getProgress(): TaskProgress {
        return {
            max     : 1,
            value   : this.complete ? 1 : 0,
            complete: this.complete,
        };
    }

    protected async doTaskAsync(): Promise<void> {
        await this.doTask();
        this.complete = true;
        this.subject.next(this.getProgress());
        this.subject.complete();
    }

    protected abstract doTask(): Promise<void> | void;
}
