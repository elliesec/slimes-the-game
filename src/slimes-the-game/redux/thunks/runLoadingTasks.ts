import { useContext, useEffect } from 'react';
import {
    resetLoadingTasks,
    updateLoadingTasksProgress,
} from '../../../common/redux/loadingTasks/loadingTasksActions';
import { CompositeTask } from '../../../common/tasks/CompositeTask';
import { DispatchContext } from '../../../index';

export function runLoadingTasks(task: CompositeTask, deps: any[]): void {
    const dispatch = useContext(DispatchContext);
    useEffect(() => {
        console.log('Run Loading Tasks');
        task.execute().subscribe(
            (progress) => dispatch(updateLoadingTasksProgress(progress)),
            (error) => console.error(error),
            () => {
                dispatch(resetLoadingTasks());
            },
        );
    }, deps);
}
