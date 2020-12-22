import React, { Component, CSSProperties, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { WindowBackgrounds } from '../../../slimes-the-game/assets/backgrounds/backgrounds';
import { WindowType } from '../../../slimes-the-game/enums';
import { State } from '../../../slimes-the-game/redux/store';
import { getLocationBackground } from '../../redux/location/locationSelectors';
import './WindowBackground.scss';

export interface WindowBackgroundProps {
    children?: ReactNode;
    windowType: WindowType;
    background: string;
}

export class WindowBackgroundClass extends Component<WindowBackgroundProps> {
    public render(): ReactElement {
        return (
            <div className="WindowBackground" style={this.getStyles()}>
                {this.props.children}
            </div>
        );
    }

    private getStyles(): CSSProperties {
        const { background } = this.props;
        if (!background) {
            return null;
        }
        return {
            backgroundImage: `url(${background})`,
        };
    }
}

function mapStateToProps(
    state: State,
    ownProps: Omit<WindowBackgroundProps, 'background'>
): Pick<WindowBackgroundProps, 'background'> {
    const background = getLocationBackground(state);
    const backgrounds = WindowBackgrounds[ownProps.windowType];
    return {
        background: backgrounds ? backgrounds[background] : null,
    };
}

export const WindowBackground = connect(mapStateToProps)(WindowBackgroundClass);
