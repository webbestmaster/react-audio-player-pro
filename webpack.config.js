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
    entry: isBuildLib ? ['./src/markdown.scss', './src/markdown.js'] : ['./www/root.scss', './www/root.js'],
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
};

if (isProduction && isBuildLib) {
    webpackConfig.output.libraryTarget = 'commonjs2';
}

// webpackConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = webpackConfig;
