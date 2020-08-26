import { Encounter } from '../common/model/encounter/Encounter';
import { ChoiceType } from '../common/model/encounter/EncounterChoice';
import { OutcomeType } from '../common/model/encounter/EncounterOutcome';
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
                    dc: 10,
                    outcomes: {
                        criticalSuccess: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'You smash the chest so hard that it is reduced to splinters. Inside is the ruined body of a mimic as well as some gear left from a previous - less fortunate - adventurer',
                            ],
                            continueText: 'Continue',
                        },
                        success: {
                            type: OutcomeType.NEXT_STAGE,
                            text: [
                                'You strike the chest hard, breaking open the wooden frame. Blood and flailing tendrils spring forth immediately. The chest was a mimic! Fortunately you have managed to wound it without placing yourself in danger.',
                            ],
                            continueText: 'Continue',
                            nextStageId: '622df858-e07b-4b26-8237-6d755ffb368c',
                        },
                        failure: {
                            type: OutcomeType.NEXT_STAGE,
                            text: [
                                'You strike the chest but your blow ricochets off leaving only superficial damage. To your surprise the chest opens in response and strong tendrils spring forth, entangling your limbs.',
                            ],
                            continueText: 'Continue',
                            nextStageId: '622df858-e07b-4b26-8237-6d755ffb368c',
                        },
                        criticalFailure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'Holding your weapon shakily you do your best to open the chest with force. Your strike throws you off balance and your blow barely glaces off the chest while you fall flat on the floor.',
                                'While you scramble to regain your dignity the chest, surprisingly, opens. Before you can even regain your footing strong tendrils have launched from the chest and ensnared you thoroughly. You are slowly dragged towards the mimic.',
                            ],
                            continueText: 'Continue',
                        },
                    },
                },
                {
                    type: ChoiceType.ROLL,
                    description: 'Pick the lock',
                    requirements: { [Stat.DEX]: 3 },
                    dc: 16,
                    outcomes: {
                        criticalSuccess: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'With well honed skill you deftly tease the lock open. In one smooth motion you remove the padlock and open the chest - all without making a sound.',
                                'Inside you find a heaped mass of tentacles. A dormant mimic! You were lucky not to disturb it.',
                            ],
                            continueText: 'Continue',
                        },
                        success: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'After some time working at it the heavy padlock on the chest gives a satisfying “click”. Before you can investigate the contents, however the chest springs open on its own. You leap backwards just in time to avoid the grasp of a mimic’s tendrils.',
                            ],
                            continueText: 'Continue',
                        },
                        failure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'You pick and pick at the lock but your patience yields before it does. Eventually you are forced to concede and walk away empty handed.',
                            ],
                            continueText: 'Continue',
                        },
                        criticalFailure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'You insert your tools into the lock only to have them snap the moment you apply pressure. In frustration you kick the chest in anger. To your shock, and initial delight, the chest springs open… to reveal a mass of thrashing tentacles.',
                                'The mimic coils around you in a flash, ensnaring all your limbs before you can back away. You are slowly dragged towards the mimic.',
                            ],
                            continueText: 'Continue',
                        },
                    },
                },
                {
                    type: ChoiceType.ROLL,
                    description: 'Check the chest for traps',
                    requirements: { [Stat.WIS]: 1 },
                    dc: 18,
                    outcomes: {
                        criticalSuccess: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'Careful observation combined with long years of experience tells you one thing: this is a mimic. Only a fool would try to open one carelessly. You should either prepare to deal with it or walk away now.',
                            ],
                            continueText: 'Continue',
                        },
                        success: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'Carefully studying the chest you notice a few things amiss. It is positioned conspicuously - something you wouldn’t expect when storing valuables. It is also noticeably less dusty than the surrounding, suggesting that it was moved here recently. You have no firm proof, but you definitely suspect a trap.',
                            ],
                            continueText: 'Continue',
                        },
                        failure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: ['You don’t notice anything out of the ordinary.'],
                            continueText: 'Continue',
                        },
                        criticalFailure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'While your attention is focused on the chest something else focuses its attention on you...',
                            ],
                            continueText: 'Continue',
                        },
                    },
                },
                {
                    type: ChoiceType.ROLL,
                    description: 'Open the chest using magic',
                    requirements: { [Stat.INT]: 6 },
                    dc: 18,
                    outcomes: {
                        criticalSuccess: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'The valuable items from the chest teleport directly to you. Oddly some of them seem to be coated in digestive fluid. It seems you looted not only the chest but the stomach contents of its occupying mimic. Good thing you were precise with your incantation.',
                            ],
                            continueText: 'Continue',
                        },
                        success: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'The contents of the chest teleport directly to you. Unfortunately this includes a dormant mimic. You can try to fight it or back away now.',
                            ],
                            continueText: 'Continue',
                        },
                        failure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: ['Your spell fizzles. Magic is hard.'],
                            continueText: 'Continue',
                        },
                        criticalFailure: {
                            type: OutcomeType.END_ENCOUNTER,
                            text: [
                                'Your magic runs amok. Instead of teleporting the contents of the chest directly to you, you find yourself teleported to them! Worse, this chest appears to have been the hiding spot for a mimic. You are trapped in a locked chest surrounded by tentacles.',
                            ],
                            continueText: 'Continue',
                        },
                    },
                },
                {
                    type: ChoiceType.END_ENCOUNTER,
                    description: 'Ignore the chest',
                    text: ['You ignore the chest and move on'],
                    continueText: 'Continue',
                },
            ],
        },
        {
            id: '622df858-e07b-4b26-8237-6d755ffb368c',
            type: EncounterStageType.CHOICE,
            text: ['You attempt to fight the mimic!'],
            choices: [],
        },
    ],
};
