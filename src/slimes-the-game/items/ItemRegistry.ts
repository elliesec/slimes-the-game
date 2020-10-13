import objectHash from 'object-hash';
import { AppearanceItem } from '../../common/model/appearance/AppearanceItem';
import { log } from '../../common/util/Log';
import RequireContext = __WebpackModuleApi.RequireContext;

export interface ItemModule {
    items: AppearanceItem[];
}

export class ItemRegistry {
    private readonly itemCache: Record<string, AppearanceItem> = {};

    public register(item: AppearanceItem): void {
        const id = itemId(item);
        if (this.itemCache[id]) {
            log.warn(`Duplicate item registered with ID "${id}". This is probably a mistake.`);
        }
        this.itemCache[id] = item;
    }

    public loadModule(module: ItemModule): void {
        module.items.forEach((item) => this.register(item));
    }

    public loadContext(context: RequireContext): void {
        context.keys().forEach((key) => {
            const module = context(key);
            this.loadModule(module);
        });
    }
}

export const itemRegistry = new ItemRegistry();

export function itemId(item: AppearanceItem): string {
    return objectHash([item.family, item.slot, item.name]);
}

itemRegistry.loadContext(require.context('./items/player', false, /\.ts$/));
