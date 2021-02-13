import { Observable } from 'rxjs';
import { TaskProgress } from './TaskProgress';

export abstract class Task {
    public abstract execute(): Observable<TaskProgress>;

    public abstract getProgress(): TaskProgress;
}
