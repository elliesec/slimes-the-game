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

export interface AppearanceSlot {
    type: AppearanceSlotType;
    canEquip: boolean;
}
