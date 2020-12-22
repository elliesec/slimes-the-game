import classNames from 'classnames';
import React, { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Observable } from 'rxjs';
import { PixiAppComponentClass } from '../../../common/components/PixiAppComponent/PixiAppComponent';
import { ProgressBar, ProgressStats } from '../../../common/components/ProgressBar/ProgressBar';
import { log } from '../../../common/util/Log';
import { loadingScreenStyles } from '../../styles/styles';
import fadeStyles from '../../styles/transitions/LoadingScreenFade.module.scss';
import styles from './LoadingScreen.module.scss';

export interface LoadingScreenProps {
    observable: Observable<ProgressStats>;
}

export interface LoadingScreenState extends ProgressStats {
    loadingComplete: boolean;
}

export class LoadingScreen extends Component<LoadingScreenProps, LoadingScreenState> {
    public constructor(props: LoadingScreenProps) {
        super(props);
        this.state = {
            min: 0,
            max: 0,
            progress: 0,
            loadingComplete: false,
        };
    }

    public componentDidMount() {
        this.subscribe(this.props?.observable);
    }

    public componentDidUpdate(prevProps: Readonly<LoadingScreenProps>) {
        const { observable } = this.props;
        if (observable && observable !== prevProps.observable) {
            this.subscribe(observable);
        }
    }

    public render(): ReactNode {
        const { loadingComplete } = this.state;
        const appRoot = document.getElementById(PixiAppComponentClass.ROOT_ID);
        if (!appRoot) {
            return null;
        }

        const { min, max, progress } = this.state;
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
                (progress) => this.setState(progress),
                (err) => log.error(err),
                () => this.complete()
            );
        }
    }

    private complete(): void {
        this.setState({ loadingComplete: true });
    }
}
