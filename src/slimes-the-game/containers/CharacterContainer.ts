import { Sprite } from 'pixi.js';
import { AppearanceItem } from '../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../common/model/appearance/AppearanceSlot';
import { LayoutContainer } from '../../common/pixi/containers/LayoutContainer';
import { ItemFamilyType } from '../items/ItemFamily';
import { itemRegistry } from '../items/ItemRegistry';

const appearance: AppearanceItem[] = [
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.SHADOW, 'defaultShadow'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.LEGS, 'defaultLegs'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.ARM_LEFT, 'defaultArmLeft'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.TORSO, 'defaultTorso'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.PUBIC_HAIR, 'defaultPubicHair'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.ARM_RIGHT, 'defaultArmRight'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.HAIR_BACK, 'defaultHairBack'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.HEAD, 'defaultHead'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.EXPRESSION, 'defaultExpression'),
    itemRegistry.getItem(ItemFamilyType.PLAYER, AppearanceSlotType.HAIR_FRONT, 'defaultHairFront'),
];

export class CharacterContainer extends LayoutContainer {
    public layout(): void {
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
}
