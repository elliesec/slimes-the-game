import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { AppearanceSlotNames } from '../../../../common/model/appearance/AppearanceSlot';
import {
    ItemCategory,
    ItemCategoryNames,
    ItemCategoryValues,
} from '../../../../common/model/appearance/ItemCategory';
import { CharacterAppearance } from '../../../../common/model/character/Character';
import { getPlayerAppearance } from '../../../../common/redux/character/playerSelectors';
import { State } from '../../../redux/store';
import { Tab, TabProps } from '../../common/Tabs/Tab';
import { Tabs } from '../../common/Tabs/Tabs';
import './DressingRoomControlsWindow.scss';

export interface DressingRoomControlsWindowProps {
    appearance: CharacterAppearance;
}

export class DressingRoomControlsWindowClass extends Component<DressingRoomControlsWindowProps> {
    public render(): ReactElement {
        return (
            <div className="Window DressingRoomControlsWindow">
                <h2>Dressing Room</h2>
                <Tabs>{ItemCategoryValues.map((category) => this.renderCategory(category))}</Tabs>
            </div>
        );
    }

    private renderCategory(category: ItemCategory): ReactElement<TabProps> {
        const { appearance } = this.props;
        const slotMapping = appearance.categories[category];
        const itemFamily = appearance.family;
        return (
            <Tab key={category} name={ItemCategoryNames[category]}>
                <table className="slot-list">
                    <thead>
                        <th>Slot</th>
                        <th>Item</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        {itemFamily.slots.map((slot) => {
                            const exclude =
                                Array.isArray(slot.categories) &&
                                !slot.categories.includes(category);
                            if (exclude) {
                                return null;
                            }
                            const item = slotMapping[slot.type];
                            return (
                                <tr key={slot.type}>
                                    <td>{AppearanceSlotNames[slot.type]}</td>
                                    <td>{item?.displayName ?? <em>Nothing</em>}</td>
                                    <td>{item?.description ?? <em>No Description</em>}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Tab>
        );
    }
}

function mapStateToProps(state: State): Partial<DressingRoomControlsWindowProps> {
    return {
        appearance: getPlayerAppearance(state),
    };
}

export const DressingRoomControlsWindow = connect(mapStateToProps)(DressingRoomControlsWindowClass);
