import { BehaviorSubject, Observable } from 'rxjs';
import { CompositeTask } from './CompositeTask';
import { TaskProgress } from './TaskProgress';

export class CompositeSeriesTask extends CompositeTask {
    private readonly subject = new BehaviorSubject<TaskProgress>(this.getProgress());

    public execute(): Observable<TaskProgress> {
        this.executeSubtask(0);
        return this.subject;
    }

    private executeSubtask(index: number): void {
        const subtask = this.subtasks[index];
        if (subtask) {
            subtask.execute().subscribe(
                () => this.subject.next(this.getProgress()),
                (error) => this.subject.error(error),
                () => {
                    if (this.getProgress().complete) {
                        this.subject.complete();
                    } else {
                        this.executeSubtask(index + 1);
                    }
                }
            );
        }
    }
}
