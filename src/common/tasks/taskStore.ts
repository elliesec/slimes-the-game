import { Observable } from 'rxjs';
import { Task } from './Task';
import { TaskProgress } from './TaskProgress';

export class TaskStore {
    private readonly tasks: Record<string, Task> = {};

    public executeTask(task: Task): Observable<TaskProgress> {
        this.tasks[task.id] = task;
        const observable = task.execute();
        observable.subscribe((progress) => {
            if (progress?.complete) {
                this.removeTask(task.id);
            }
        });
        return observable;
    }

    public getTask(id: string): Task {
        return this.tasks[id];
    }

    private removeTask(id: string): void {
        delete this.tasks[id];
    }
}
