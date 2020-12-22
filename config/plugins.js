const { DefinePlugin, ProvidePlugin } = require('webpack'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlPlugin = require('html-webpack-plugin'),
    FaviconsPlugin = require('favicons-webpack-plugin'),
    { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'),
    ImageminPlugin = require('imagemin-webpack'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    paths = require('./paths'),
    env = require('./env'),
    pages = require('./pages');

module.exports = (mode, analyze) => {
    const processEnv = env(mode);
    const plugins = [
        new CleanWebpackPlugin(),
        new DefinePlugin({ 'process.env': JSON.stringify(processEnv) }),
        new ProvidePlugin({ PIXI: 'pixi.js' }),
        new FaviconsPlugin(faviconsPluginConfig(processEnv)),
        new ImageminPlugin(imageminPluginConfig(mode)),
    ];

    pages(processEnv).forEach((page) => plugins.push(new HtmlPlugin(htmlPluginConfig(mode, page))));

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

function htmlPluginConfig(mode, { id, name }) {
    return {
        filename: `${id}.html`,
        chunks: [id],
        template: paths.sourceFile('index.ejs'),
        minify: htmlPluginMinifyConfig(mode),
        title: name,
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
            appName: processEnv.GAME_NAME,
            appDescription: processEnv.GAME_NAME,
            developerName: 'Ellie & Cecilia',
            developerUrl: 'https://github.com/elliesec',
            background: '#e4e4e5',
            theme_color: '#80b12a',
            start_url: '/index.html',
            version: processEnv.APP_VERSION,
        },
    };
}

function imageminPluginConfig(mode) {
    const isProduction = mode === 'production';
    return {
        imageminOptions: {
            plugins: [
                ['gifsicle', { optimizationLevel: isProduction ? 3 : 2 }],
                ['mozjpeg', { quality: 100 }],
                ['optipng', { optimizationLevel: isProduction ? 5 : 1 }],
                ['svgo', { plugins: [{ removeViewBox: false }] }],
            ],
        },
    };
}
