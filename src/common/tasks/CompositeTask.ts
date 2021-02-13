import { Task } from './Task';
import { aggregateProgress, TaskProgress } from './TaskProgress';

export abstract class CompositeTask extends Task {
    protected readonly subtasks: Task[] = [];

    public add(task: Task): this {
        this.subtasks.push(task);
        return this;
    }

    public getProgress(): TaskProgress {
        return this.subtasks.reduce<TaskProgress>(
            (progress, subtask) => aggregateProgress(progress, subtask.getProgress()),
            { max: 0, value: 0, complete: true }
        );
    }
}
