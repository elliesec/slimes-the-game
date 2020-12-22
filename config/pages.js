module.exports = (processEnv) => {
    return [
        {
            id: 'siteMap',
            name: 'Site Map',
        },
        {
            id: 'index',
            name: processEnv.GAME_NAME,
        },
        {
            id: 'combatSandbox1',
            name: 'Combat Sandbox 1',
        },
    ];
};
