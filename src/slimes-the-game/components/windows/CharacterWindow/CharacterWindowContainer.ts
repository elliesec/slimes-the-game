import {
    DomTrackingContainer,
    DomTrackingContainerProps,
} from '../../../../common/pixi/containers/DomTrackingContainer';
import { CHARACTER_ASSET_HEIGHT, CHARACTER_ASSET_WIDTH } from '../../../config/config';
import { CharacterContainer } from '../../../containers/CharacterContainer';

export interface CharacterWindowContainerProps extends DomTrackingContainerProps {}

export class CharacterWindowContainer extends DomTrackingContainer<CharacterWindowContainerProps> {
    public layout(): void {
        super.layout();
        const { width, height } = this.props;
        const scaleX = width / CHARACTER_ASSET_WIDTH;
        const scaleY = height / CHARACTER_ASSET_HEIGHT;
        const scale = Math.min(scaleX, scaleY);
        const x = (width - CHARACTER_ASSET_WIDTH * scale) / 2;
        const y = (height - CHARACTER_ASSET_HEIGHT * scale) / 2;
        const characterContainer = new CharacterContainer();
        characterContainer.position.set(x, y);
        characterContainer.scale.set(scale);
        this.addChild(characterContainer);
    }
}
