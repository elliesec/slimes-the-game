import { connect } from 'react-redux';
import { State } from '../../slimes-the-game/redux/store';
import { Point } from '../types';

export interface WithAppPositionProps {
    appPosition: Point;
}

function mapStateToProps<P extends WithAppPositionProps>(
    state: State
): Pick<P, keyof WithAppPositionProps> {
    return { appPosition: state.app.position };
}

export const withAppPosition = connect(mapStateToProps);
