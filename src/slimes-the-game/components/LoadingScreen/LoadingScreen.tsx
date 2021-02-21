import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { PixiAppComponentClass } from '../../../common/components/PixiAppComponent/PixiAppComponent';
import { ProgressBar } from '../../../common/components/ProgressBar/ProgressBar';
import { CompositeTask } from '../../../common/tasks/CompositeTask';
import { TaskProgress } from '../../../common/tasks/TaskProgress';
import { State } from '../../redux/store';
import { runLoadingTasks } from '../../redux/thunks/runLoadingTasks';
import { loadingScreenStyles } from '../../styles/styles';
import fadeStyles from '../../styles/transitions/LoadingScreenFade.module.scss';
import styles from './LoadingScreen.module.scss';

export interface LoadingScreenProps {
    children?: ReactNode;
    task: CompositeTask;
    progress: TaskProgress;
    ready: boolean;
}

export const LoadingScreenComponent = ({ children, ready, task, progress }: LoadingScreenProps) => {
    const [completed, setCompleted] = useState(false);
    const showContent = ready && progress.complete;

    runLoadingTasks(task, [ready]);

    if (!completed && showContent) {
        setCompleted(true);
    }

    const appRoot = document.getElementById(PixiAppComponentClass.ROOT_ID);
    if (!appRoot) {
        return null;
    }

    return (
        <div className={classNames('AppView', styles.LoadingScreen)}>
            {showContent && children}
            {createPortal(
                <CSSTransition
                    classNames={fadeStyles}
                    in={!showContent && !completed}
                    timeout={{ enter: 0, exit: loadingScreenStyles.fadeOutMs }}
                    unmountOnExit
                >
                    <div className={styles.screen}>
                        <div
                            className={classNames(styles.screenContent, {
                                [styles.screenContentOut]: showContent,
                            })}
                        >
                            <span className={styles.loadingText}>Loading...</span>
                            <ProgressBar max={progress.max} progress={progress.value} />
                        </div>
                    </div>
                </CSSTransition>,
                appRoot
            )}
        </div>
    );
};

function mapStateToProps(state: State): Pick<LoadingScreenProps, 'progress' | 'task'> {
    return {
        task: state.loadingTasks.task,
        progress: state.loadingTasks.progress,
    };
}

export const LoadingScreen = connect(mapStateToProps)(LoadingScreenComponent);
