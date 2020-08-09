const { DefinePlugin } = require('webpack'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlPlugin = require('html-webpack-plugin'),
    FaviconsPlugin = require('favicons-webpack-plugin'),
    { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    paths = require('./paths'),
    env = require('./env');

module.exports = (mode, analyze) => {
    const processEnv = env(mode);
    const plugins = [
        new CleanWebpackPlugin(),
        new DefinePlugin({ 'process.env': JSON.stringify(processEnv) }),
        new HtmlPlugin(htmlPluginConfig(mode)),
        new FaviconsPlugin(faviconsPluginConfig(processEnv)),
    ];

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    if (mode === 'production') {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[name].[contenthash].chunk.css',
                ignoreOrder: true,
            })
        );
    }

    return plugins;
};

function htmlPluginConfig(mode) {
    return {
        template: paths.sourceFile('index.ejs'),
        minify: htmlPluginMinifyConfig(mode),
    };
}

function htmlPluginMinifyConfig(mode) {
    if (mode !== 'production') {
        return false;
    }

    return {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLS: true,
    };
}

function faviconsPluginConfig(processEnv) {
    return {
        logo: paths.sourceFile('favicon.png'),
        favicons: {
            appName: 'Slimes: The Game',
            appDescription: 'Slimes: The Game',
            developerName: 'Ellie & Cecilia',
            developerUrl: 'https://github.com/elliesec',
            background: '#e4e4e5',
            theme_color: '#80b12a',
            start_url: '/index.html',
            version: processEnv.APP_VERSION,
        },
    };
}
