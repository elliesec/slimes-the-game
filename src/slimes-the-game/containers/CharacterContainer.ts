import { Sprite } from 'pixi.js';
import { AppearanceItem } from '../../common/model/appearance/AppearanceItem';
import { LayoutContainer } from '../../common/pixi/containers/LayoutContainer';
import { getPlayerAppearanceItems } from '../../common/redux/character/playerSelectors';
import { store } from '../redux/store';

export interface CharacterContainerProps {
    appearance: AppearanceItem[];
}

export class CharacterContainer extends LayoutContainer<CharacterContainerProps> {
    public constructor(props?: CharacterContainerProps) {
        super(props);
        this.setPropsFromState = this.setPropsFromState.bind(this);
        this.setPropsFromState();
        store.subscribe(this.setPropsFromState);
    }

    public layout(): void {
        const { appearance } = this.props;
        if (!Array.isArray(appearance)) {
            return;
        }

        appearance.forEach((item) => {
            if (item) {
                item.assets.forEach((asset) => {
                    if (asset) {
                        const sprite = Sprite.from(asset.url);
                        this.addChild(sprite);
                    }
                });
            }
        });
    }

    private setPropsFromState(): void {
        const state = store.getState();
        const appearance = getPlayerAppearanceItems(state);
        const props = { appearance };
        this.setProps(props);
    }
}
