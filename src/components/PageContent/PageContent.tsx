import { h, PreactDOMAttributes, VNode } from 'preact';
import './PageContent.scss';

export const PageContent = (props: PreactDOMAttributes): VNode => (
    <main className="PageContent">{props.children}</main>
);
