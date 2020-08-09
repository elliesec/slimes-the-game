const packageJson = require('../package.json');

module.exports = (mode) => ({
    NODE_ENV: mode.toLowerCase(),
    VERSION: packageJson.version,
});
