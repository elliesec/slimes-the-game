import { connect } from 'react-redux';
import { State } from '../../slimes-the-game/redux/store';
import { PixiApp } from '../pixi/PixiApp';

export interface WithPixiAppProps {
    app: PixiApp;
}

function mapStateToProps<P extends WithPixiAppProps>(
    state: State
): Pick<P, keyof WithPixiAppProps> {
    return { app: state.app.pixiApp };
}

export const withPixiApp = connect(mapStateToProps);
