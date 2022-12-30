const path = require('path');
const nodeExternals = require('webpack-node-externals');
const externals = [nodeExternals()]; // in order to ignore all modules in node_modules folder
const externalsPresets = {node: true}; // in order to ignore built-in modules like path, fs, etc.

const {optimization} = require('./webpack/setting/optimization');
const {rules} = require('./webpack/setting/module/rules');
const {alias} = require('./webpack/setting/resolve/alias');
const {extensions} = require('./webpack/setting/resolve/extensions');
const {plugins} = require('./webpack/setting/plugins');
const {devServer} = require('./webpack/setting/dev-server');
const {watchOptions} = require('./webpack/setting/watch-options');

const {
    pathToStaticFileFolder,
    isDevelopment,
    isProduction,
    pathToDist,
    cwd,
    nodeEnvironment,
    isBuildLibrary,
    isFront,
    isBack,
    isServerProdBuild,
} = require('./webpack/config');

const configFront = {
    entry: ['./www/css/root.scss', './www/root.tsx'],
    output: {
        pathinfo: false,
        path: path.join(cwd, pathToDist),
        publicPath: isDevelopment ? '/' : pathToStaticFileFolder,
        filename: isDevelopment ? '[name].js' : 'index.js',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
        assetModuleFilename: isDevelopment
            ? 'build-asset/[name]----[hash:6][ext][query]'
            : 'build-asset/[hash:6][ext][query]',
    },

    mode: nodeEnvironment,
    devtool: 'source-map', // isDevelopment ? 'source-map' : false,
    optimization,
    module: {rules},
    resolve: {alias, extensions},
    plugins,
    devServer,
    watchOptions,
};

const configBack = {
    ...configFront,
    entry: ['./server/server.tsx'],
    optimization: {minimize: false}, // isServerProdBuild ? optimization : {minimize: false},
    target: 'node',
    devtool: 'source-map', // isServerProdBuild ? false : 'source-map',
    externalsPresets,
    externals,
};

const configLibraryFront = {
    entry: ['./www/library/library.ts'],
    output: {
        pathinfo: false,
        path: path.join(cwd, 'dist'),
        publicPath: '',
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },

    mode: nodeEnvironment,
    devtool: false,
    optimization,
    module: {rules},
    resolve: {alias, extensions},
    plugins,
    devServer,
    externalsPresets,
    externals,
    watchOptions,

    /*
    externals: {
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
        'react-router-dom': {
            commonjs: 'react-router-dom',
            commonjs2: 'react-router-dom',
            amd: 'ReactRouterDOM',
            root: 'ReactRouterDOM',
        },
    },
*/
};

const configLibraryBack = {...configLibraryFront};

let webpackConfigBySide = null;
webpackConfigBySide = isFront ? configFront : webpackConfigBySide;
webpackConfigBySide = isBack ? configBack : webpackConfigBySide;

let webpackConfigBuildLibraryBySide = null;
webpackConfigBuildLibraryBySide = isFront ? configLibraryFront : webpackConfigBuildLibraryBySide;
webpackConfigBuildLibraryBySide = isBack ? configLibraryBack : webpackConfigBuildLibraryBySide;

const webpackConfig = isBuildLibrary ? webpackConfigBuildLibraryBySide : webpackConfigBySide;

// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
// webpackConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = webpackConfig;
