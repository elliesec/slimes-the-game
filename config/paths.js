const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const dist = path.join(root, 'docs');
const distDev = path.join(root, 'dist');

module.exports = {
    root,
    source,
    dist,
    distDev,
    sourceFile(filePath) {
        return path.join(source, filePath);
    },
};
