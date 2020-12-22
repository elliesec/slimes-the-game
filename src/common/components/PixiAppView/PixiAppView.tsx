import { Component } from 'react';
import { PixiApp } from '../../pixi/PixiApp';

export interface PixiAppViewProps {
    app: PixiApp;
}

export abstract class PixiAppView<
    P extends PixiAppViewProps = PixiAppViewProps,
    S = {}
> extends Component<P, S> {}
