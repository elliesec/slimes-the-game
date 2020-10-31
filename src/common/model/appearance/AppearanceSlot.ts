import { ItemCategory } from './ItemCategory';

export enum AppearanceSlotType {
    HEAD = 'head',
    TORSO = 'torso',
    HIPS = 'hips',
    LEGS = 'legs',
    FEET = 'feet',
    ARM_LEFT = 'armLeft',
    ARM_RIGHT = 'armRight',
    HAIR_BACK = 'hairBack',
    EXPRESSION = 'expression',
    HAIR_FRONT = 'hairFront',
    PUBIC_HAIR = 'pubicHair',
    SHADOW = 'shadow',
}

export const AppearanceSlotTypeValues: AppearanceSlotType[] = Object.values(AppearanceSlotType);

export const AppearanceSlotNames: Record<AppearanceSlotType, string> = {
    [AppearanceSlotType.HEAD]: 'Head',
    [AppearanceSlotType.TORSO]: 'Torso',
    [AppearanceSlotType.HIPS]: 'Hips',
    [AppearanceSlotType.LEGS]: 'Legs',
    [AppearanceSlotType.FEET]: 'Feet',
    [AppearanceSlotType.ARM_LEFT]: 'Left Arm',
    [AppearanceSlotType.ARM_RIGHT]: 'Right Arm',
    [AppearanceSlotType.HAIR_BACK]: 'Back Hair',
    [AppearanceSlotType.EXPRESSION]: 'Expression',
    [AppearanceSlotType.HAIR_FRONT]: 'Front Hair',
    [AppearanceSlotType.PUBIC_HAIR]: 'Pubic Hair',
    [AppearanceSlotType.SHADOW]: 'Shadow',
};

export interface AppearanceSlot {
    type: AppearanceSlotType;
    canEquip: boolean;
    categories?: ItemCategory[];
}
