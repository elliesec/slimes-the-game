export enum AppearanceSlotType {
    SHADOW = 'shadow',
    LEGS = 'legs',
    TORSO = 'torso',
    PUBIC_HAIR = 'pubicHair',
    ARM_LEFT = 'armLeft',
    ARM_RIGHT = 'armRight',
    HEAD = 'head',
    HAIR_BACK = 'hairBack',
    HAIR_FRONT = 'hairFront',
    EXPRESSION = 'expression',
}

export interface AppearanceSlot {
    type: AppearanceSlotType;
}
