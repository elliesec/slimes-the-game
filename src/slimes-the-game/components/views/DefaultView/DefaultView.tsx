import React, { ReactElement } from 'react';
import { Observable } from 'rxjs';
import { PixiAppView } from '../../../../common/components/PixiAppView/PixiAppView';
import { ProgressStats } from '../../../../common/components/ProgressBar/ProgressBar';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { Sidebar } from '../../Sidebar/Sidebar';
import { CharacterWindow } from '../../windows/CharacterWindow/CharacterWindow';
import { MapWindow } from '../../windows/MapWindow/MapWindow';
import { NPCWindow } from '../../windows/NPCWindow/NPCWindow';
import { TextWindow } from '../../windows/TextWindow/TextWindow';
import './DefaultView.scss';

export class DefaultView extends PixiAppView {
    private observable = new Observable<ProgressStats>((subscriber) => {
        let progress = 0;
        const interval = window.setInterval(() => {
            if (progress >= 100) {
                subscriber.complete();
                clearInterval(interval);
            } else {
                progress += 25;
                subscriber.next({ min: 0, max: 100, progress });
            }
        }, 1200);
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
