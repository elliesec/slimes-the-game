import { Component, h, VNode } from 'preact';

export enum EncounterViewPage {
    CONFIG,
    ENCOUNTER,
}

export interface EncounterViewProps {
    page: EncounterViewPage;
}

export class EncounterView extends Component<EncounterViewProps> {
    public render(): VNode {
        return <div className="EncounterView"></div>;
    }
}
