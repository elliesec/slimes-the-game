import { h } from 'preact';
import { SitePage } from '../../config/pages';
import * as pages from '../../config/pages';
import './SiteMap.scss';
import { PageContent } from '../components/PageContent/PageContent';

export const SiteMap = () => {
    return (
        <div className="SiteMap">
            <PageContent>
                <h1>Site Map</h1>
                <p>
                    Welcome to the site map for Slimes: The Game. This page serves to link the
                    related pages, tools and of course the game itself. Click one of the links below
                    to get started.
                </p>
                <h2>Available Pages</h2>
                <ul>
                    {pages.map((page) => (
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
