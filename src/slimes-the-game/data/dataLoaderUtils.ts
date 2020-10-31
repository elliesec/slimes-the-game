import { Callback } from '../../common/functions';
import { DefaultModule } from '../../common/types';
import RequireContext = __WebpackModuleApi.RequireContext;

export function loadContext<T>(
    context: RequireContext,
    moduleLoader: Callback<DefaultModule<T>>
): void {
    context.keys().forEach((key) => {
        moduleLoader(context(key));
    });
}
