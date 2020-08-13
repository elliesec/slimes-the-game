import { h, VNode } from 'preact';
import { JSXInternal } from 'preact/src/jsx';
import HTMLAttributes = JSXInternal.HTMLAttributes;

export interface PlayerConfigPanelInputProps<T>
    extends HTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

export const PlayerConfigPanelInput = <T extends unknown>(
    props: PlayerConfigPanelInputProps<T>
): VNode => (
    <label htmlFor={props.id}>
        <span>{props.label}:</span>
        <input {...props} />
    </label>
);
