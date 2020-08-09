const TerserPlugin = require('terser-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    paths = require('./paths'),
    rules = require('./rules'),
    plugins = require('./plugins'),
    pages = require('./pages');

module.exports = (env, argv) => {
    const mode = argv.mode || 'development';
    const isProduction = mode === 'production';
    const analyze = argv.analyze;

    const entry = pages.reduce((acc, page) => {
        acc[page.id] = paths.sourceFile(`${page.id}.ts`);
        return acc;
    }, {});

    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            open: true,
            port: 6969,
        },
        devtool: 'source-map',
        entry,
        mode,
        output: {
            path: paths.dist,
            publicPath: '/',
            filename: `[name]${isProduction ? '.[chunkhash]' : ''}.js`,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: rules(mode),
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: { ecma: 8 },
                        compress: {
                            ecma: '2015',
                            passes: 3,
                            toplevel: true,
                        },
                        mangle: {
                            toplevel: true,
                        },
                    },
                }),
                new OptimizeCssAssetsPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: 12,
                minSize: 30000,
            },
        },
        plugins: plugins(mode, analyze),
    };
};
