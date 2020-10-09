const path = require('path');

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'); // eslint-disable-line no-unused-vars

const {
    pathToStaticFileFolder,
    isDevelopment,
    isProduction,
    pathToDist,
    cwd,
    isBuildServer,
    isBuildLib,
    isBuildSite,
} = require('./webpack/config');

const webpackConfig = {
    entry: isBuildLib ? ['./src/audio-player.js'] : ['markdown-pro/dist/style.css', './www/root.scss', './www/root.js'],
    output: {
        path: path.join(cwd, pathToDist),
        // publicPath: `${isDevelopment || isBuildServer ? '' : pathToStaticFileFolder}/`,
        publicPath: '',
        filename: isDevelopment ? '[name].js' : 'index.js',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
    },

    devtool: isProduction ? false : 'source-map',
    optimization: require('./webpack/setting/optimization').optimization,
    module: {rules: require('./webpack/setting/module/rules').rules},
    resolve: {alias: require('./webpack/setting/resolve/alias').alias},
    plugins: require('./webpack/setting/plugins').plugins,
    devServer: require('./webpack/setting/dev-server').devServer,

    // TODO: separate this
    externals: isBuildLib
        ? {
            // Don't bundle react and react-dom
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React',
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'ReactDOM',
                root: 'ReactDOM',
            },
        }
        : {},
};

if (isProduction && isBuildLib) {
    webpackConfig.output.libraryTarget = 'commonjs2';
}

// webpackConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = webpackConfig;
