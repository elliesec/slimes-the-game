import React, { Component, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { PixiAppComponentClass } from '../../../common/components/PixiAppComponent/PixiAppComponent';
import { getAppFadeOut } from '../../../common/redux/app/appSelectors';
import { WithAppState } from '../../../common/redux/app/appState';
import { loadingScreenStyles } from '../../styles/styles';
import fadeStyles from '../../styles/transitions/LoadingScreenFade.module.scss';
import styles from './FadeOut.module.scss';

export interface FadeOutProps {
    visible: boolean;
}

export interface FadeOutState {
    active: boolean;
    visible: boolean;
}

export class FadeOutClass extends Component<FadeOutProps, FadeOutState> {
    public constructor(props: FadeOutProps) {
        super(props);
        this.state = {
            active: false,
            visible: false,
        };
    }

    public componentDidMount() {
        this.forceUpdate();
    }

    public render(): ReactElement {
        const appRoot = document.getElementById(PixiAppComponentClass.ROOT_ID);
        if (!appRoot) {
            return null;
        }

        const { visible } = this.props;
        return createPortal(
            <CSSTransition
                classNames={fadeStyles}
                in={visible}
                timeout={{
                    enter: loadingScreenStyles.fadeInMs,
                    exit: loadingScreenStyles.fadeOutMs,
                }}
                mountOnEnter
                unmountOnExit
            >
                <div className={styles.FadeOut}>FadeOut!</div>
            </CSSTransition>,
            appRoot
        );
    }
}

function mapStateToProps(state: WithAppState): FadeOutProps {
    return {
        visible: getAppFadeOut(state),
    };
}

export const FadeOut = connect(mapStateToProps)(FadeOutClass);
