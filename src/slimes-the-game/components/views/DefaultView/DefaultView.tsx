import React, { useEffect, useState } from 'react';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { Sidebar } from '../../Sidebar/Sidebar';
import { CharacterWindow } from '../../windows/CharacterWindow/CharacterWindow';
import { MapWindow } from '../../windows/MapWindow/MapWindow';
import { NPCWindow } from '../../windows/NPCWindow/NPCWindow';
import { TextWindow } from '../../windows/TextWindow/TextWindow';
import './DefaultView.scss';

export const DefaultView = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => setReady(true), []);

    return (
        <LoadingScreen ready={ready}>
            <div className="AppView DefaultView">
                <Sidebar />
                <div className="windows">
                    <TextWindow />
                    <div className="context-windows">
                        <CharacterWindow />
                        <div className="context-windows-lower">
                            <MapWindow />
                            <NPCWindow />
                        </div>
                    </div>
                </div>
            </div>
        </LoadingScreen>
    );
};
