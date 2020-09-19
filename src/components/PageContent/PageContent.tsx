import React, { HTMLProps, ReactElement } from 'react';
import './PageContent.scss';

export const PageContent = (props: HTMLProps<HTMLElement>): ReactElement => (
    <main className="PageContent">{props.children}</main>
);
