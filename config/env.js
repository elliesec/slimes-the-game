const packageJson = require('../package.json');

module.exports = (mode) => ({
    NODE_ENV: mode.toLowerCase(),
    VERSION: packageJson.version,
    // GAME_NAME: 'Slimes: The Game',
    GAME_NAME: 'Arknights: The Game',
});
