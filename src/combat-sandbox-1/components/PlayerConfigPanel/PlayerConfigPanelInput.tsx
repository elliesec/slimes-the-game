import React, { HTMLProps, ReactElement } from 'react';

export interface PlayerConfigPanelInputProps<T> extends HTMLProps<HTMLInputElement> {
    id: string;
    label: string;
}

export const PlayerConfigPanelInput = <T extends unknown>(
    props: PlayerConfigPanelInputProps<T>
): ReactElement => (
    <label htmlFor={props.id}>
        <span>{props.label}:</span>
        <input {...props} />
    </label>
);
