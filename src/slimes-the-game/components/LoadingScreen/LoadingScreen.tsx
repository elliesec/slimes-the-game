import classNames from 'classnames';
import React, { Component, ReactNode } from 'react';
import { Observable } from 'rxjs';
import { log } from '../../../common/util/Log';
import styles from './LoadingScreen.module.scss';
import fadeStyles from '../../styles/transitions/LoadingScreenFade.module.scss';
import { loadingScreenStyles } from '../../styles/styles';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { PixiAppComponentClass } from '../../../common/components/PixiAppComponent/PixiAppComponent';

export interface LoadingProgress {
    min: number;
    max: number;
    progress: number;
}

export interface LoadingScreenProps {
    observable: Observable<LoadingProgress>;
}

export interface LoadingScreenState extends LoadingProgress {
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
        this.subscribe(props?.observable);
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
                                Loading...
                            </div>
                        </div>
                    </CSSTransition>,
                    appRoot
                )}
            </div>
        );
    }

    private subscribe(observable: Observable<LoadingProgress>): void {
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
