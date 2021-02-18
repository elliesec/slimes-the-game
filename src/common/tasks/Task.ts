import cuid from 'cuid';
import { Observable } from 'rxjs';
import { TaskProgress } from './TaskProgress';

export abstract class Task {
    public constructor(public readonly name: string) {}

    public readonly id = cuid();

    public abstract execute(): Observable<TaskProgress>;

    public abstract getProgress(): TaskProgress;
}
