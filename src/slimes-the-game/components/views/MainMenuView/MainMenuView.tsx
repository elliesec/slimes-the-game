import React, { useContext, useEffect, useState } from 'react';
import { addLoadingTask } from '../../../../common/redux/loadingTasks/loadingTasksActions';
import { PreloadImagesTask } from '../../../../common/util/tasks/PreloadImagesTask';
import { DispatchContext } from '../../../../index';
import { GAME_NAME } from '../../../config/config';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { MainMenuButtons } from './MainMenuButtons';
import './MainMenuView.scss';

const mainMenuBackground = require('./main-menu-bg.png');

export const MainMenuView = () => {
    const dispatch = useContext(DispatchContext);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const preloadTask = new PreloadImagesTask(mainMenuBackground);
        dispatch(addLoadingTask(preloadTask));
        setReady(true);
    }, []);

    return (
        <LoadingScreen ready={ready}>
            <div
                className="AppView MainMenuView"
                style={{ backgroundImage: `url(${mainMenuBackground})` }}
            >
                <div className="menu-backdrop">
                    <h1>{GAME_NAME}</h1>
                    <MainMenuButtons />
                </div>
            </div>
        </LoadingScreen>
    );
};
