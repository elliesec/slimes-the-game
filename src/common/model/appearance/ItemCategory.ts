export enum ItemCategory {
    BODY = 'body',
    UNDERWEAR = 'underwear',
    CLOTHES = 'clothes',
    ARMOUR = 'armour',
}

export const ItemCategoryValues: ItemCategory[] = Object.values(ItemCategory);

export const ItemCategoryNames: Record<ItemCategory, string> = {
    [ItemCategory.BODY]: 'Body',
    [ItemCategory.UNDERWEAR]: 'Underwear',
    [ItemCategory.CLOTHES]: 'Clothes',
    [ItemCategory.ARMOUR]: 'Armour',
};
