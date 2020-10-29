import classNames from 'classnames';
import React, { Component, ReactElement } from 'react';
import { Callback, noop } from '../../../../common/functions';
import { TabProps } from './Tab';

export interface TabHeaderProps {
    tab: ReactElement<TabProps>;
    selected: boolean;
    onSelect?: Callback<ReactElement<TabProps>>;
}

export class TabHeader extends Component<TabHeaderProps> {
    public static defaultProps: Partial<TabHeaderProps> = {
        onSelect: noop,
    };

    public constructor(props: TabHeaderProps) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    public render(): ReactElement {
        const { tab, selected } = this.props;
        return (
            <li className={classNames('TabHeader', { selected })}>
                <button onClick={this.onSelect}>{tab.props.name}</button>
            </li>
        );
    }

    private onSelect(): void {
        this.props.onSelect(this.props.tab);
    }
}
