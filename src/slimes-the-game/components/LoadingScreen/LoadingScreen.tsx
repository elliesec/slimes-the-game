import classNames from 'classnames';
import React, { Component, ReactNode } from 'react';
import { Observable } from 'rxjs';
import { log } from '../../../common/util/Log';
import styles from './LoadingScreen.module.scss';

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
    transitionComplete: boolean;
    visible: boolean;
}

export class LoadingScreen extends Component<LoadingScreenProps, LoadingScreenState> {
    public constructor(props: LoadingScreenProps) {
        super(props);
        this.state = {
            min: 0,
            max: 0,
            progress: 0,
            loadingComplete: false,
            transitionComplete: false,
            visible: false,
        };
        this.subscribe(props?.observable);
    }

    public componentDidMount(): void {
        this.setState({ visible: true });
    }

    public componentDidUpdate(prevProps: Readonly<LoadingScreenProps>) {
        const { observable } = this.props;
        if (observable && observable !== prevProps.observable) {
            this.subscribe(observable);
        }
    }

    public render(): ReactNode {
        const { loadingComplete, transitionComplete, visible } = this.state;
        return (
            <div className={classNames('AppView', styles.LoadingScreen)}>
                {loadingComplete && this.props.children}
                {!transitionComplete && (
                    <div className={classNames(styles.screen, { [styles.visible]: visible })}>
                        <div className={styles.screenContent}>Loading...</div>
                    </div>
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
        this.setState({ loadingComplete: true, visible: false }, () => {
            setTimeout(() => {
                this.setState({ transitionComplete: true });
                console.log('Loading done!');
            }, styles.loadingScreenFadeOutMs);
        });
    }
}
