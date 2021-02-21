import React, { Component, ReactElement } from 'react';
import styles from './ProgressBar.module.scss';

export interface ProgressBarProps {
    max: number;
    progress: number;
}

export class ProgressBar extends Component<ProgressBarProps> {
    public render(): ReactElement {
        const { max, progress } = this.props;
        let percentage: number;
        if (typeof max !== 'number' || typeof progress !== 'number') {
            percentage = 0;
        } else {
            percentage = Math.round((100 * progress) / max);
        }

        return (
            <div className={styles.ProgressBar}>
                <div className={styles.fill} style={{ width: `${percentage}%` }} />
            </div>
        );
    }
}
