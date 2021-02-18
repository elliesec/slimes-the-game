import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { log } from '../util/Log';
import { CompositeTask } from './CompositeTask';
import { aggregateProgress, TaskProgress } from './TaskProgress';

export class CompositeParallelTask extends CompositeTask {
    public execute(): Observable<TaskProgress> {
        log.debug(`[${this.id}] Executing composite parallel task "${this.name}"`);
        return combineLatest(
            this.subtasks.map((subtask) => {
                return subtask.execute();
            })
        ).pipe(
            map((progressValues) => {
                return progressValues.reduce(aggregateProgress, {
                    max     : 0,
                    value   : 0,
                    complete: true,
                });
            })
        );
    }
}
