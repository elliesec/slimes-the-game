import { Encounter, EncounterStageType, StageOptionType } from './Encounter';

export const encounter1: Encounter = {
    id: 'encounter1',
    name: 'An Old Chest',
    initialStageId: 0,
    stages: [
        {
            id: 0,
            type: EncounterStageType.OPTIONS,
            text: ['You see an old chest. It appears to be locked.'],
            options: [
                {
                    type: StageOptionType.DIFFICULTY_CHECK,
                    text: 'Break the chest open',
                    requirements: {
                        strength: 2,
                    },
                    difficultyCheck: 10,
                    outcomes: {},
                },
                {
                    type: StageOptionType.DIFFICULTY_CHECK,
                    text: 'Pick the lock',
                    requirements: {
                        dexterity: 3,
                    },
                    difficultyCheck: 16,
                    outcomes: {},
                },
                {
                    type: StageOptionType.DIFFICULTY_CHECK,
                    text: 'Check the chest for traps',
                    requirements: {
                        wisdom: 1,
                    },
                    difficultyCheck: 18,
                    outcomes: {},
                },
                {
                    type: StageOptionType.DIFFICULTY_CHECK,
                    text: 'Open the chest using magic',
                    requirements: {
                        intelligence: 6,
                    },
                    difficultyCheck: 18,
                    outcomes: {},
                },
                {
                    type: StageOptionType.FLAVOUR,
                    text: 'Ignore the chest',
                    nextStageId: 30,
                },
            ],
        },
        {
            id: 10,
            type: EncounterStageType.OPTIONS,
            text: ['You attempt to fight the mimic!'],
            options: [],
        },
        {
            id: 20,
            type: EncounterStageType.OPTIONS,
            text: ['You attempt to escape.'],
            options: [],
        },
        {
            id: 30,
            type: EncounterStageType.END_SCENE,
            text: ['You ignore the chest and move on.'],
            continueText: 'Move on',
        },
    ],
};
