import { useContext, useEffect } from 'react';
import {
    resetLoadingTasks,
    updateLoadingTasksProgress,
} from '../../../common/redux/loadingTasks/loadingTasksActions';
import { CompositeTask } from '../../../common/tasks/CompositeTask';
import { log } from '../../../common/util/Log';
import { DispatchContext } from '../../../index';

export function runLoadingTasks(task: CompositeTask, [ready]: [boolean]): void {
    const dispatch = useContext(DispatchContext);
    useEffect(() => {
        if (ready) {
            task.execute().subscribe(
                (progress) => dispatch(updateLoadingTasksProgress(progress)),
                (error) => log.error(error),
                () => {
                    dispatch(resetLoadingTasks());
                },
            );
        }
    }, [ready]);
}
