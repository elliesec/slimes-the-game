import { Callback } from '../../common/functions';
import { AppearanceItemDefinition } from '../../common/model/appearance/AppearanceItem';
import { ItemFamily } from '../../common/model/appearance/ItemFamily';
import { registerItems } from '../../common/redux/item/itemActions';
import { registerItemFamily } from '../../common/redux/itemFamily/itemFamilyActions';
import { log } from '../../common/util/Log';
import { store } from '../redux/store';
import RequireContext = __WebpackModuleApi.RequireContext;

export interface DefaultModule<T> {
    default: T;
}

export function loadFamilies(): void {
    log.debug('Loading Item Families: Starting...');
    const context = require.context('./families', false, /\.ts$/);
    loadContext<ItemFamily>(context, loadFamilyModule);
    log.debug('Loading Item Families: Done.');
}

export function loadItems(): void {
    log.debug('Loading Items: Starting...');
    const context = require.context('./items/player', false, /\.ts$/);
    loadContext<AppearanceItemDefinition[]>(context, loadItemModule);
    log.debug('Loading Items: Done.');
}

function loadItemModule(module: DefaultModule<AppearanceItemDefinition[]>): void {
    store.dispatch(registerItems(...module.default));
}

function loadContext<T>(context: RequireContext, moduleLoader: Callback<DefaultModule<T>>): void {
    context.keys().forEach((key) => {
        moduleLoader(context(key));
    });
}

function loadFamilyModule(module: DefaultModule<ItemFamily>): void {
    store.dispatch(registerItemFamily(module.default));
}
