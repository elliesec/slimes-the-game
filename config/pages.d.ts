declare namespace pages {
    export interface SitePage {
        id: string;
        name: string;
    }
}
declare const pages: pages.SitePage[];

export = pages;
