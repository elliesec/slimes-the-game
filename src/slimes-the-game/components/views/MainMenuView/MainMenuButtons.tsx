import React, { useCallback, useContext } from 'react';
import { ButtonGrid } from '../../../../common/components/ButtonGrid/ButtonGrid';
import { appSetView } from '../../../../common/redux/app/appActions';
import { AppView } from '../../../../common/redux/app/appState';
import { DispatchContext } from '../../../../index';
import { newGameAction } from '../../../redux/thunks/newGame';
import { MainMenuButton } from './MainMenuButton';

export const MainMenuButtons = () => {
    const dispatch = useContext(DispatchContext);

    const onNewGame = useCallback(() => {
        dispatch(newGameAction());
        dispatch(appSetView(AppView.DEFAULT));
    }, []);

    const onLoadGame = useCallback(() => {
        console.log('onLoadGame');
    }, []);

    const onSettings = useCallback(() => {
        console.log('onSettings');
    }, []);

    return (
        <ButtonGrid rows={3} columns={1}>
            <MainMenuButton row={0} column={0} onSelect={onNewGame}>
                New Game
            </MainMenuButton>
            <MainMenuButton row={1} column={0} onSelect={onLoadGame}>
                Load Game
            </MainMenuButton>
            <MainMenuButton row={2} column={0} onSelect={onSettings}>
                Settings
            </MainMenuButton>
        </ButtonGrid>
    );
};
