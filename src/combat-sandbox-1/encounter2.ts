import { Encounter } from './Encounter';

export const encounter2: Encounter = {
    id: 'encounter2',
    name: 'Foo',
    initialStageId: 0,
    stages: [
        {
            id: 0,
            text: 'You see an old chest. It appears to be locked.',
            options: [
                {
                    text: 'Break the chest open',
                    requirements: {
                        strength: 2,
                    },
                    difficultyCheck: 10,
                    outcomes: {},
                },
                {
                    text: 'Pick the lock',
                    requirements: {
                        dexterity: 3,
                    },
                    difficultyCheck: 16,
                    outcomes: {},
                },
                {
                    text: 'Check the chest for traps',
                    requirements: {
                        wisdom: 1,
                    },
                    difficultyCheck: 18,
                    outcomes: {},
                },
                {
                    text: 'Open the chest using magic',
                    requirements: {
                        intelligence: 6,
                    },
                    difficultyCheck: 18,
                    outcomes: {},
                },
                {
                    text: 'Ignore the chest',
                    nextStageId: 30,
                },
            ],
        },
        {
            id: 10,
            text: 'You attempt to fight the mimic!',
            options: [],
        },
        {
            id: 20,
            text: 'You attempt to escape.',
            options: [],
        },
        {
            id: 30,
            text: 'You ignore the chest and move on.',
            options: [],
        },
    ],
};
