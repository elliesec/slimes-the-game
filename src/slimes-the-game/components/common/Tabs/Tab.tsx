import React, { Component, ReactElement } from 'react';

export interface TabProps {
    name: string;
}

export class Tab extends Component<TabProps> {
    public render(): ReactElement {
        return <div className="Tab">{this.props.children}</div>;
    }
}
