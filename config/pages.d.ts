interface ProcessEnv {
    GAME_NAME: string;
}

declare namespace pages {
    export interface SitePage {
        id: string;
        name: string;
    }
}
declare const pages: (processEnv: ProcessEnv) => pages.SitePage[];

export = pages;
