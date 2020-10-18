import { Sprite } from 'pixi.js';
import { AppearanceItem } from '../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../common/model/appearance/AppearanceSlot';
import {
    DomTrackingContainer,
    DomTrackingContainerProps,
} from '../../common/pixi/containers/DomTrackingContainer';
import { ItemFamilyType } from '../items/ItemFamily';
import { itemRegistry } from '../items/ItemRegistry';

export interface CharacterContainerProps extends DomTrackingContainerProps {}

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

export class CharacterContainer extends DomTrackingContainer<CharacterContainerProps> {
    public constructor(props: CharacterContainerProps) {
        super(props);
    }

    public layout() {
        super.layout();
        const { width, height } = this.props;
        const scaleX = width / 1800;
        const scaleY = height / 1500;
        const scale = Math.min(scaleX, scaleY);
        const x = (width - 1800 * scale) / 2;
        const y = (height - 1500 * scale) / 2;
        appearance.forEach((item) => {
            if (item) {
                item.assets.forEach((asset) => {
                    if (asset) {
                        const sprite = Sprite.from(asset.url);
                        sprite.x = x;
                        sprite.y = y;
                        sprite.scale.set(Math.min(scaleX, scaleY));
                        this.addChild(sprite);
                    }
                });
            }
        });
    }
}
