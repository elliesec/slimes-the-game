import React, { ReactElement } from 'react';
import { PixiAppView } from '../../../../common/components/PixiAppView/PixiAppView';
import { Sidebar } from '../../Sidebar/Sidebar';
import { CharacterWindow } from '../../windows/CharacterWindow/CharacterWindow';
import { MapWindow } from '../../windows/MapWindow/MapWindow';
import { NPCWindow } from '../../windows/NPCWindow/NPCWindow';
import { TextWindow } from '../../windows/TextWindow/TextWindow';
import './DefaultView.scss';
import { Observable } from 'rxjs';
import { LoadingProgress, LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { log } from '../../../../common/util/Log';

export class DefaultView extends PixiAppView {
    private observable = new Observable<LoadingProgress>((subscriber) => {
        setTimeout(() => {
            log.debug('Completing observable');
            subscriber.complete();
        }, 1000);
    });

    public render(): ReactElement {
        return (
            <LoadingScreen observable={this.observable}>
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
    }
}
