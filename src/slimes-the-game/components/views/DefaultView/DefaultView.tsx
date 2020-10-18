import React, { ReactElement } from 'react';
import { PixiAppView } from '../../../../common/components/PixiAppView/PixiAppView';
import { Sidebar } from '../../Sidebar/Sidebar';
import { CharacterWindow } from '../../windows/CharacterWindow/CharacterWindow';
import { MapWindow } from '../../windows/MapWindow/MapWindow';
import { NPCWindow } from '../../windows/NPCWindow/NPCWindow';
import { TextWindow } from '../../windows/TextWindow/TextWindow';
import './DefaultView.scss';

export class DefaultView extends PixiAppView {
    public render(): ReactElement {
        return (
            <div className="DefaultView">
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
        );
    }
}
