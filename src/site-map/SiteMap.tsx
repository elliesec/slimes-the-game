import React from 'react';
import * as pages from '../../config/pages';
import { SitePage } from '../../config/pages';
import { PageContent } from '../components/PageContent/PageContent';
import './SiteMap.scss';

export const SiteMap = () => {
    return (
        <div className="SiteMap">
            <PageContent>
                <h1>Site Map</h1>
                <p>
                    Welcome to the site map for {process.env.GAME_NAME}. This page serves to link
                    the related pages, tools and of course the game itself. Click one of the links
                    below to get started.
                </p>
                <h2>Available Pages</h2>
                <ul>
                    {pages({ GAME_NAME: process.env.GAME_NAME }).map((page) => (
                        <li>
                            <a href={`${page.id}.html`}>{getPageText(page)}</a>
                        </li>
                    ))}
                </ul>
            </PageContent>
        </div>
    );
};

function getPageText({ id, name }: SitePage): string {
    let text = name;
    if (document.location.pathname.endsWith(`${id}.html`)) {
        text += ' (you are here)';
    }
    return text;
}
