import classNames from 'classnames';
import React, { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Dispatch } from 'redux';
import { Observable } from 'rxjs';
import { PixiAppComponentClass } from '../../../common/components/PixiAppComponent/PixiAppComponent';
import { ProgressBar } from '../../../common/components/ProgressBar/ProgressBar';
import { noop } from '../../../common/functions';
import { combineProgressStats, ProgressStats } from '../../../common/model/job/jobUtils';
import { jobClearLoadingJobs } from '../../../common/redux/job/jobActions';
import { getLoadingJobProgress } from '../../../common/redux/job/jobSelectors';
import { log } from '../../../common/util/Log';
import { State } from '../../redux/store';
import { loadingScreenStyles } from '../../styles/styles';
import fadeStyles from '../../styles/transitions/LoadingScreenFade.module.scss';
import styles from './LoadingScreen.module.scss';

export interface LoadingScreenProps {
    children?: ReactNode;
    loadingJobProgress: ProgressStats;
    observable: Observable<ProgressStats>;
    onLoadingComplete: () => void;
}

export interface LoadingScreenState {
    loadingComplete: boolean;
    observableComplete: boolean;
    observableProgress: ProgressStats;
    totalProgress: ProgressStats;
}

export class LoadingScreenClass extends Component<LoadingScreenProps, LoadingScreenState> {
    public static defaultProps: Partial<LoadingScreenProps> = {
        onLoadingComplete: noop,
    };

    public constructor(props: LoadingScreenProps) {
        super(props);
        this.state = {
            loadingComplete: false,
            observableComplete: false,
            observableProgress: {
                min: 0,
                max: 0,
                progress: 0,
            },
            totalProgress: {
                min: 0,
                max: 0,
                progress: 0,
            },
        };
    }

    public componentDidMount() {
        this.subscribe(this.props?.observable);
    }

    public componentDidUpdate(prevProps: Readonly<LoadingScreenProps>) {
        const { observable } = this.props;
        const { loadingJobProgress } = this.props;
        if (observable && observable !== prevProps.observable) {
            this.subscribe(observable);
        } else if (loadingJobProgress !== prevProps.loadingJobProgress) {
            const totalProgress = combineProgressStats(
                loadingJobProgress,
                this.state.observableProgress
            );
            if (
                loadingJobProgress.progress >= loadingJobProgress.max &&
                this.state.observableComplete &&
                !this.state.loadingComplete
            ) {
                this.complete({ totalProgress });
            } else {
                this.setState({ totalProgress });
            }
        }
    }

    public render(): ReactNode {
        const { loadingComplete } = this.state;
        const appRoot = document.getElementById(PixiAppComponentClass.ROOT_ID);
        if (!appRoot) {
            return null;
        }

        const { min, max, progress } = this.state.totalProgress;
        return (
            <div className={classNames('AppView', styles.LoadingScreen)}>
                {loadingComplete && this.props.children}
                {createPortal(
                    <CSSTransition
                        classNames={fadeStyles}
                        in={!loadingComplete}
                        timeout={{ enter: 0, exit: loadingScreenStyles.fadeOutMs }}
                        unmountOnExit
                    >
                        <div className={styles.screen}>
                            <div
                                className={classNames(styles.screenContent, {
                                    [styles.screenContentOut]: loadingComplete,
                                })}
                            >
                                <span className={styles.loadingText}>Loading...</span>
                                <ProgressBar min={min} max={max} progress={progress} />
                            </div>
                        </div>
                    </CSSTransition>,
                    appRoot
                )}
            </div>
        );
    }

    private subscribe(observable: Observable<ProgressStats>): void {
        if (observable) {
            log.debug('Subscribing to observable');
            observable.subscribe(
                (progress) => {
                    const { loadingJobProgress } = this.props;
                    this.setState({
                        totalProgress: combineProgressStats(loadingJobProgress, progress),
                        observableProgress: progress,
                    });
                },
                (err) => log.error(err),
                () => this.completeObservable()
            );
        }
    }

    private completeObservable(): void {
        if (this.isLoadingJobsComplete()) {
            this.complete({ observableComplete: true });
        } else {
            this.setState({ observableComplete: true });
        }
    }

    private isLoadingJobsComplete(): boolean {
        const { loadingJobProgress } = this.props;
        return loadingJobProgress.progress >= loadingJobProgress.max;
    }

    private complete<K extends keyof LoadingScreenState>(state: Pick<LoadingScreenState, K>): void {
        this.setState<K & 'loadingComplete'>({ ...state, loadingComplete: true });
        this.props.onLoadingComplete();
    }
}

function mapStateToProps(state: State): Pick<LoadingScreenProps, 'loadingJobProgress'> {
    return {
        loadingJobProgress: getLoadingJobProgress(state),
    };
}

function mapDispatchToProps(dispatch: Dispatch): Pick<LoadingScreenProps, 'onLoadingComplete'> {
    return {
        onLoadingComplete(): void {
            dispatch(jobClearLoadingJobs());
        },
    };
}

export const LoadingScreen = connect(mapStateToProps, mapDispatchToProps)(LoadingScreenClass);
