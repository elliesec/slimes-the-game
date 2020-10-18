import { IPointData } from 'pixi.js';
import { connect } from 'react-redux';
import { State } from '../../slimes-the-game/redux/store';

export interface WithAppPositionProps {
    appPosition: IPointData;
}

function mapStateToProps<P extends WithAppPositionProps>(
    state: State
): Pick<P, keyof WithAppPositionProps> {
    return { appPosition: state.app.position };
}

export const withAppPosition = connect(mapStateToProps);
