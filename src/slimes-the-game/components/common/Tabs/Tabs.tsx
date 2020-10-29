import React, { Children, Component, ReactElement } from 'react';
import { TabProps } from './Tab';
import { TabHeader } from './TabHeader';
import './Tabs.scss';

export interface TabsProps {
    children?: ReactElement<TabProps> | Array<ReactElement<TabProps>>;
}

export interface TabsState {
    selected: string;
}

export class Tabs extends Component<TabsProps, TabsState> {
    public constructor(props: TabsProps) {
        super(props);

        this.state = {
            selected: null,
        };

        this.onSelectTab = this.onSelectTab.bind(this);
    }

    public render(): ReactElement {
        const { selected } = this.state;
        const tabs = Children.map(this.props.children, (child: ReactElement<TabProps>) => child);
        const selectedTab = tabs.find((tab) => tab.props.name === selected) ?? tabs[0];

        return (
            <div className="Tabs">
                <ol className="tabs-header">
                    {tabs.map((tab) => (
                        <TabHeader
                            key={tab.props.name}
                            tab={tab}
                            selected={tab === selectedTab}
                            onSelect={this.onSelectTab}
                        />
                    ))}
                </ol>
                <div className="tab-pane">{selectedTab}</div>
            </div>
        );
    }

    private onSelectTab(tab: ReactElement<TabProps>): void {
        this.setState({ selected: tab.props.name });
    }
}
