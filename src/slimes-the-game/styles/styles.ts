import styles from './_constants.module.scss';

export interface WindowStyles {
    padding: string;
}

export interface LoadingScreenStyles {
    fadeInMs: number;
    fadeOutMs: number;
    backgroundColor: string;
}

export const windowStyles: WindowStyles = {
    padding: styles.windowPadding,
};

export const loadingScreenStyles: LoadingScreenStyles = {
    fadeInMs: Number(styles.loadingScreenFadeInMs),
    fadeOutMs: Number(styles.loadingScreenFadeOutMs),
    backgroundColor: styles.loadingScreenBackgroundColor,
};
