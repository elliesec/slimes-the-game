import { Encounter } from '../common/model/encounter/Encounter';
import { ChoiceType } from '../common/model/encounter/EncounterChoice';
import { EncounterStageType } from '../common/model/encounter/EncounterStage';
import { Stat } from './Player';

export const encounter1: Encounter = {
    id: '0d895b71-0029-4e82-9a20-ce883e891660',
    name: 'An Old Chest',
    entryStage: 'c0704d17-9746-489b-a3eb-a8cfc5b4bc76',
    stages: [
        {
            id: 'c0704d17-9746-489b-a3eb-a8cfc5b4bc76',
            type: EncounterStageType.CHOICE,
            text: ['You see an old chest. It appears to be locked.', 'What do you do?'],
            choices: [
                {
                    type: ChoiceType.ROLL,
                    description: 'Break the chest open',
                    requirements: { [Stat.STR]: 2 },
                },
                {
                    type: ChoiceType.ROLL,
                    description: 'Pick the lock',
                    requirements: { [Stat.DEX]: 3 },
                },
                {
                    type: ChoiceType.ROLL,
                    description: 'Check the chest for traps',
                    requirements: { [Stat.WIS]: 1 },
                },
                {
                    type: ChoiceType.ROLL,
                    description: 'Open the chest using magic',
                    requirements: { [Stat.INT]: 6 },
                },
                {
                    type: ChoiceType.END_ENCOUNTER,
                    description: 'Ignore the chest',
                    text: ['You ignore the chest and move on'],
                    continueText: 'Continue',
                },
            ],
        },
    ],
};
