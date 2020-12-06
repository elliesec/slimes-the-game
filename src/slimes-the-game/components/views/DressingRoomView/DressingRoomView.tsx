import React, { ReactElement } from 'react';
import { PixiAppView } from '../../../../common/components/PixiAppView/PixiAppView';
import { CharacterWindow } from '../../windows/CharacterWindow/CharacterWindow';
import { DressingRoomControlsWindow } from '../../windows/DressingRoomControlsWindow/DressingRoomControlsWindow';
import './DressingRoomView.scss';

export class DressingRoomView extends PixiAppView {
    public render(): ReactElement {
        return (
            <div className="AppView DressingRoomView">
                <DressingRoomControlsWindow />
                <CharacterWindow />
            </div>
        );
    }
}
