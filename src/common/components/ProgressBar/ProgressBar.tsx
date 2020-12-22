import React, { Component, ReactElement } from 'react';
import styles from './ProgressBar.module.scss';

export interface ProgressStats {
    min: number;
    max: number;
    progress: number;
}

export interface ProgressBarProps extends ProgressStats {}

export class ProgressBar extends Component<ProgressBarProps> {
    public render(): ReactElement {
        const { min, max, progress } = this.props;
        let percentage: number;
        if (typeof min !== 'number' || typeof max !== 'number' || typeof progress !== 'number') {
            percentage = 0;
        } else {
            percentage = (progress - min) / (max - min);
        }

        return (
            <div className={styles.ProgressBar}>
                <div className={styles.fill} style={{ width: `${percentage * 100}%` }} />
            </div>
        );
    }
}
