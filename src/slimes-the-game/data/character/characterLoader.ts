import { CharacterDefinition } from '../../../common/model/character/Character';
import { registerCharacter } from '../../../common/redux/character/characterActions';
import { registerPlayer } from '../../../common/redux/character/playerActions';
import { DefaultModule } from '../../../common/types';
import { log } from '../../../common/util/Log';
import { store } from '../../redux/store';
import { loadContext } from '../dataLoaderUtils';
import player from './player';

export function loadPlayer(): void {
    log.debug('Loading Player: Starting...');
    store.dispatch(registerPlayer(player));
    log.debug('Loading Player: Done.');
}

export function loadCharacters(): void {
    log.debug('Loading Characters: Starting...');
    const context = require.context('./characters', false, /\.ts$/);
    loadContext<CharacterDefinition>(context, loadCharacterModule);
    log.debug('Loading Characters: Done.');
}

function loadCharacterModule(module: DefaultModule<CharacterDefinition>): void {
    store.dispatch(registerCharacter(module.default));
}
