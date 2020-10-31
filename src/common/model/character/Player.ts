import { Character } from './Character';
import { CharacterDefinition } from './CharacterDefinition';
import { NormalizedCharacter } from './NormalizedCharacter';

export interface PlayerDefinition extends CharacterDefinition {}

export interface NormalizedPlayer extends NormalizedCharacter {}

export interface Player extends Character {}
