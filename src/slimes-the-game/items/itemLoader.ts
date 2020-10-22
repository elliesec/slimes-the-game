import { AppearanceItemDefinition } from '../../common/model/appearance/AppearanceItem';
import { registerItems } from '../../common/redux/item/itemActions';
import { store } from '../redux/store';
import RequireContext = __WebpackModuleApi.RequireContext;

export interface ItemModule {
    default: AppearanceItemDefinition[];
}

export function loadItems(): void {
    loadItemContext(require.context('./items/player', false, /\.ts$/));
}

function loadItemModule(module: ItemModule): void {
    store.dispatch(registerItems(...module.default));
}

function loadItemContext(context: RequireContext): void {
    context.keys().forEach((key) => {
        const module = context(key);
        loadItemModule(module);
    });
}
