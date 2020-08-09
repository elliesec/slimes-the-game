const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const dist = path.join(root, 'docs');

module.exports = {
    root,
    source,
    dist,
    sourceFile(filePath) {
        return path.join(source, filePath);
    },
};
