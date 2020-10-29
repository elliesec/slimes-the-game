import React, { ChangeEvent, Component, ReactElement } from 'react';
import { noop } from '../../../../common/functions';
import { AppearanceItem } from '../../../../common/model/appearance/AppearanceItem';
import {
    AppearanceSlotNames,
    AppearanceSlotType,
} from '../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../common/model/appearance/ItemCategory';

export interface DressingRoomSlotSelectProps {
    category: ItemCategory;
    slot: AppearanceSlotType;
    item: AppearanceItem;
    options: AppearanceItem[];
    onSelect?: (category: ItemCategory, slot: AppearanceSlotType, item: AppearanceItem) => void;
}

export class DressingRoomSlotSelect extends Component<DressingRoomSlotSelectProps> {
    public static defaultProps: Partial<DressingRoomSlotSelectProps> = {
        onSelect: noop,
    };

    public constructor(props: DressingRoomSlotSelectProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    public render(): ReactElement {
        const { category, slot, item, options } = this.props;
        const id = `dressing-room-slot-select-${category}-${slot}`;
        return (
            <select
                name={AppearanceSlotNames[slot]}
                id={id}
                className="DressingRoomSlotSelect"
                value={item?.id ?? ''}
                onChange={this.onChange}
            >
                <option key="nothing" value={''}>
                    Nothing
                </option>
                {options.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.displayName}
                    </option>
                ))}
            </select>
        );
    }

    private onChange(e: ChangeEvent<HTMLSelectElement>): void {
        const { category, slot, options, onSelect } = this.props;
        const item = options.find((i) => i.id === e.target.value) ?? null;
        onSelect(category, slot, item);
    }
}
