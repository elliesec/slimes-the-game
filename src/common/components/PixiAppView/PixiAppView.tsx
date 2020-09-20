import { Component } from 'react';
import { PixiApp } from '../../pixi/PixiApp';

export interface PixiAppViewProps {
    app: PixiApp;
}

export abstract class PixiAppView<S = {}> extends Component<PixiAppViewProps, S> {}
