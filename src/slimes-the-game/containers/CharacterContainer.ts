import { Sprite } from 'pixi.js';
import { AppearanceItem } from '../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../common/model/appearance/AppearanceSlot';
import { LayoutContainer } from '../../common/pixi/containers/LayoutContainer';
import { getItemByFamilySlotName } from '../../common/redux/item/itemSelectors';
import { ItemFamilyType } from '../../common/model/appearance/ItemFamily';
import { store } from '../redux/store';

const appearanceKeys: Array<[ItemFamilyType, AppearanceSlotType, string]> = [
    [ItemFamilyType.HUMAN, AppearanceSlotType.SHADOW, 'defaultShadow'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.LEGS, 'defaultLegs'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.ARM_LEFT, 'defaultArmLeft'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.TORSO, 'defaultTorso'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.PUBIC_HAIR, 'defaultPubicHair'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.ARM_RIGHT, 'defaultArmRight'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.HAIR_BACK, 'defaultHairBack'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.HEAD, 'defaultHead'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.EXPRESSION, 'defaultExpression'],
    [ItemFamilyType.HUMAN, AppearanceSlotType.HAIR_FRONT, 'defaultHairFront'],
];

export interface CharacterContainerProps {
    appearance: AppearanceItem[];
}

export class CharacterContainer extends LayoutContainer<CharacterContainerProps> {
    public constructor(props?: CharacterContainerProps) {
        super(props);
        this.setPropsFromState = this.setPropsFromState.bind(this);
        this.setPropsFromState();
        store.subscribe(this.setPropsFromState);
    }

    public layout(): void {
        const { appearance } = this.props;
        if (!Array.isArray(appearance)) {
            return;
        }

        appearance.forEach((item) => {
            if (item) {
                item.assets.forEach((asset) => {
                    if (asset) {
                        const sprite = Sprite.from(asset.url);
                        this.addChild(sprite);
                    }
                });
            }
        });
    }

    private setPropsFromState(): void {
        const state = store.getState();
        const appearance = appearanceKeys.map(([family, slot, name]) =>
            getItemByFamilySlotName(state, family, slot, name)
        );
        const props = { appearance };
        this.setProps(props);
    }
}
