import { Encounter } from './model/Encounter';
import { EncounterOptionType } from './model/EncounterOption';
import { EncounterStageType } from './model/EncounterStage';

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
                    type: EncounterOptionType.DIFFICULTY_CHECK,
                    text: 'Break the chest open',
                    requirements: {
                        strength: 2,
                    },
                    difficultyCheck: 10,
                    outcomes: {
                        criticalSuccess: {
                            text: [
                                'You smash the chest so hard that it is reduced to splinters. Inside is the ruined body of a mimic as well as some gear left from a previous - less fortunate - adventurer.',
                            ],
                        },
                        success: {
                            text: [
                                'You strike the chest hard, breaking open the wooden frame. Blood and flailing tendrils spring forth immediately. The chest was a mimic! Fortunately you have managed to wound it without placing yourself in danger.',
                            ],
                        },
                        failure: {
                            text: [
                                'You strike the chest but your blow ricochets off leaving only superficial damage. To your surprise the chest opens in response and strong tendrils spring forth, entangling your limbs.',
                            ],
                        },
                        criticalFailure: {
                            text: [
                                'Holding your weapon shakily you do your best to open the chest with force. Your strike throws you off balance and your blow barely glaces off the chest while you fall flat on the floor.',
                                'While you scramble to regain your dignity the chest, surprisingly, opens. Before you can even regain your footing strong tendrils have launched from the chest and ensnared you thoroughly. You are slowly dragged towards the mimic.',
                            ],
                        },
                    },
                },
                {
                    type: EncounterOptionType.DIFFICULTY_CHECK,
                    text: 'Pick the lock',
                    requirements: {
                        dexterity: 3,
                    },
                    difficultyCheck: 16,
                    outcomes: {
                        criticalSuccess: {
                            text: [
                                'With well honed skill you deftly tease the lock open. In one smooth motion you remove the padlock and open the chest - all without making a sound.',
                                'Inside you find a heaped mass of tentacles. A dormant mimic! You were lucky not to disturb it.',
                            ],
                        },
                        success: {
                            text: [
                                'After some time working at it the heavy padlock on the chest gives a satisfying “click”. Before you can investigate the contents, however the chest springs open on its own. You leap backwards just in time to avoid the grasp of a mimic’s tendrils.',
                            ],
                        },
                        failure: {
                            text: [
                                'You pick and pick at the lock but your patience yields before it does. Eventually you are forced to concede and walk away empty handed.',
                            ],
                        },
                        criticalFailure: {
                            text: [
                                'You insert your tools into the lock only to have them snap the moment you apply pressure. In frustration you kick the chest in anger. To your shock, and initial delight, the chest springs open… to reveal a mass of thrashing tentacles.',
                                'The mimic coils around you in a flash, ensnaring all your limbs before you can back away. You are slowly dragged towards the mimic.',
                            ],
                        },
                    },
                },
                {
                    type: EncounterOptionType.DIFFICULTY_CHECK,
                    text: 'Check the chest for traps',
                    requirements: {
                        wisdom: 1,
                    },
                    difficultyCheck: 18,
                    outcomes: {
                        criticalSuccess: {
                            text: [
                                'Careful observation combined with long years of experience tells you one thing: this is a mimic. Only a fool would try to open one carelessly. You should either prepare to deal with it or walk away now.',
                            ],
                        },
                        success: {
                            text: [
                                'Carefully studying the chest you notice a few things amiss. It is positioned conspicuously - something you wouldn’t expect when storing valuables. It is also noticeably less dusty than the surrounding, suggesting that it was moved here recently. You have no firm proof, but you definitely suspect a trap.',
                            ],
                        },
                        failure: {
                            text: ['You don’t notice anything out of the ordinary.'],
                        },
                        criticalFailure: {
                            text: [
                                'While your attention is focused on the chest something else focuses its attention on you...',
                            ],
                        },
                    },
                },
                {
                    type: EncounterOptionType.DIFFICULTY_CHECK,
                    text: 'Open the chest using magic',
                    requirements: {
                        intelligence: 6,
                    },
                    difficultyCheck: 18,
                    outcomes: {
                        criticalSuccess: {
                            text: [
                                'The valuable items from the chest teleport directly to you. Oddly some of them seem to be coated in digestive fluid. It seems you looted not only the chest but the stomach contents of its occupying mimic. Good thing you were precise with your incantation.',
                            ],
                        },
                        success: {
                            text: [
                                'The contents of the chest teleport directly to you. Unfortunately this includes a dormant mimic. You can try to fight it or back away now.',
                            ],
                        },
                        failure: {
                            text: ['Your spell fizzles. Magic is hard.'],
                        },
                        criticalFailure: {
                            text: [
                                'Your magic runs amok. Instead of teleporting the contents of the chest directly to you, you find yourself teleported to them! Worse, this chest appears to have been the hiding spot for a mimic. You are trapped in a locked chest surrounded by tentacles.',
                            ],
                        },
                    },
                },
                {
                    type: EncounterOptionType.FLAVOUR,
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
