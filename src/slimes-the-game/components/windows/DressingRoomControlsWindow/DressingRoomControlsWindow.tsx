import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { noop } from '../../../../common/functions';
import { AppearanceItem } from '../../../../common/model/appearance/AppearanceItem';
import {
    AppearanceSlot,
    AppearanceSlotNames,
    AppearanceSlotType,
} from '../../../../common/model/appearance/AppearanceSlot';
import {
    ItemCategory,
    ItemCategoryNames,
    ItemCategoryValues,
} from '../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../common/model/appearance/ItemFamily';
import { CharacterAppearance } from '../../../../common/model/character/Character';
import { setPlayerAppearanceItem } from '../../../../common/redux/character/playerActions';
import { getPlayerAppearance } from '../../../../common/redux/character/playerSelectors';
import {
    getItemCategoryMappings,
    ItemCategoryMapping,
} from '../../../../common/redux/item/itemSelectors';
import { State } from '../../../redux/store';
import { Tab, TabProps } from '../../common/Tabs/Tab';
import { Tabs } from '../../common/Tabs/Tabs';
import './DressingRoomControlsWindow.scss';
import { DressingRoomSlotSelect } from './DressingRoomSlotSelect';

export interface DressingRoomControlsWindowProps {
    appearance: CharacterAppearance;
    itemCategoryMapping: ItemCategoryMapping;
    onItemSet?: (category: ItemCategory, slot: AppearanceSlotType, item: AppearanceItem) => void;
}

export class DressingRoomControlsWindowClass extends Component<DressingRoomControlsWindowProps> {
    public static defaultProps: Partial<DressingRoomControlsWindowProps> = {
        onItemSet: noop,
    };

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
                        <tr>
                            <th>Slot</th>
                            <th>Item</th>
                            <th>Description</th>
                        </tr>
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
                                    <td>{this.renderSlotSelect(category, slot)}</td>
                                    <td>{item?.description ?? <em>No Description</em>}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Tab>
        );
    }

    private renderSlotSelect(category: ItemCategory, slot: AppearanceSlot): ReactElement {
        const { appearance, itemCategoryMapping } = this.props;
        const characterSlotMapping = appearance.categories[category];
        const item = characterSlotMapping[slot.type] ?? null;
        const availableItems = itemCategoryMapping[category][slot.type] ?? [];
        return (
            <DressingRoomSlotSelect
                category={category}
                slot={slot.type}
                item={item}
                options={availableItems}
                onSelect={this.props.onItemSet}
            />
        );
    }
}

function mapStateToProps(state: State): Partial<DressingRoomControlsWindowProps> {
    return {
        appearance: getPlayerAppearance(state),
        itemCategoryMapping: getItemCategoryMappings(state, ItemFamilyType.HUMAN),
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<DressingRoomControlsWindowProps> {
    return {
        onItemSet(category: ItemCategory, slot: AppearanceSlotType, item: AppearanceItem): void {
            dispatch(setPlayerAppearanceItem(category, slot, item));
        },
    };
}

export const DressingRoomControlsWindow = connect(
    mapStateToProps,
    mapDispatchToProps
)(DressingRoomControlsWindowClass);
