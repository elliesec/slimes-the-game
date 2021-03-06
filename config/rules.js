const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    PostCssFlexbugsFixesPlugin = require('postcss-flexbugs-fixes'),
    PostCssPresetEnvPlugin = require('postcss-preset-env');

module.exports = (mode) => [
    {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: 'ts-loader',
    },
    {
        enforce: 'pre',
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'source-map-loader',
    },
    {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff2?)$/i,
        loader: 'url-loader',
        options: {
            limit: 8192,
            esModule: false,
            name: 'assets/[contenthash].[ext]',
        },
    },
    {
        test: /\.s?css$/i,
        use: getStyleLoaders(mode),
    },
];

function getStyleLoaders(mode) {
    const loaders = [
        {
            loader: 'css-loader',
            options: {
                modules: { auto: true },
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        PostCssFlexbugsFixesPlugin(),
                        PostCssPresetEnvPlugin({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                        }),
                    ],
                },
            },
        },
        { loader: 'sass-loader' },
    ];
    if (mode === 'production') {
        loaders.unshift(MiniCssExtractPlugin.loader);
    } else {
        loaders.unshift('style-loader');
    }
    return loaders;
}
