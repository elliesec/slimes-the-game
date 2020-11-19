import { Background, instanceOfBackground } from '../../../common/model/location/Background';
import { PartialRecord } from '../../../common/types';
import { log } from '../../../common/util/Log';
import RequireContext = __WebpackModuleApi.RequireContext;

const FILE_NAME_REGEX = /\.\/(.+)\.(jpe?g|png)$/;

export const CharacterBackgrounds = loadCharacterBackgrounds();
export const TextBackgrounds = loadTextBackgrounds();

function loadBackgroundContext(context: RequireContext): PartialRecord<Background, string> {
    return context.keys().reduce((record, key) => {
        const filename = key.match(FILE_NAME_REGEX)[1];
        if (instanceOfBackground(filename)) {
            record[filename] = context(key);
        }
        return record;
    }, {} as PartialRecord<Background, string>);
}

function loadCharacterBackgrounds(): PartialRecord<Background, string> {
    log.debug(`Loading character backgrounds: Starting...`);
    const context = require.context('./character', false, /\.(jpe?g|png)$/);
    const record = loadBackgroundContext(context);
    log.debug(`Loading character backgrounds: Done.`);
    return record;
}

function loadTextBackgrounds(): PartialRecord<Background, string> {
    log.debug(`Loading text window backgrounds: Starting...`);
    const context = require.context('./text', false, /\.(jpe?g|png)$/);
    const record = loadBackgroundContext(context);
    log.debug(`Loading text window backgrounds: Done.`);
    return record;
}
