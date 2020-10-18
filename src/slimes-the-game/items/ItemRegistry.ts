import objectHash from 'object-hash';
import { AppearanceItem } from '../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../common/model/appearance/AppearanceSlot';
import { PartialRecord } from '../../common/types';
import { log } from '../../common/util/Log';
import { ItemFamily, ItemFamilyType } from './ItemFamily';
import RequireContext = __WebpackModuleApi.RequireContext;

export interface ItemModule {
    default: AppearanceItem[];
}

export class ItemRegistry {
    private readonly familyCache: PartialRecord<ItemFamilyType, ItemFamily> = {};
    private readonly itemCache: Record<string, AppearanceItem> = {};

    public getItem(family: ItemFamilyType, slot: AppearanceSlotType, name: string): AppearanceItem {
        const id = itemId(family, slot, name);
        const item = this.itemCache[id] ?? null;
        if (!item) {
            log.warn(
                `Could not find item in item cache matching with family "${family}", slot "${slot}" and name "${name}".`
            );
        }
        return item;
    }

    public registerItem(item: AppearanceItem): void {
        const id = itemIdFromItem(item);
        if (this.itemCache[id]) {
            log.warn(`Duplicate item registered with ID "${id}". This is probably a mistake.`);
        }
        this.itemCache[id] = item;
    }

    public loadItemModule(module: ItemModule): void {
        module.default.forEach((item) => this.registerItem(item));
    }

    public loadItemContext(context: RequireContext): void {
        context.keys().forEach((key) => {
            const module = context(key);
            this.loadItemModule(module);
        });
    }

    public registerFamily(family: ItemFamily): void {
        const type = family.type;
        if (this.familyCache[type]) {
            log.warn(
                `Duplicate item family registered with type "${type}". This is probably a mistake.`
            );
        }
        this.familyCache[type] = family;
    }
}

export const itemRegistry = new ItemRegistry();

export function itemIdFromItem(item: AppearanceItem): string {
    return itemId(item.family, item.slot, item.name);
}

export function itemId(family: ItemFamilyType, slot: AppearanceSlotType, name: string): string {
    return objectHash([family, slot, name]);
}

itemRegistry.loadItemContext(require.context('./items/player', false, /\.ts$/));
