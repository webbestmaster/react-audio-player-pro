import path from 'node:path';

import {Configuration} from 'webpack';
import nodeExternals from 'webpack-node-externals';
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import {optimization} from './setting/optimization';
import {rules} from './setting/module/rules';
import {alias} from './setting/resolve/alias';
import {extensions} from './setting/resolve/extensions';
import {plugins} from './setting/plugins';
import {devServer} from './setting/dev-server';
import {watchOptions} from './setting/watch-options';

const externals = [nodeExternals()]; // in order to ignore all modules in node_modules folder
const externalsPresets = {node: true}; // in order to ignore built-in modules like path, fs, etc.

import {
    pathToStaticFileFolder,
    isDevelopment,
    // isProduction,
    pathToDistribution,
    cwd,
    nodeEnvironment,
    isBuildLibrary,
    isFront,
    isBack,
    // isServerProdBuild,
} from './config';

const configFront: Configuration = {
    devtool: 'source-map', // isDevelopment ? 'source-map' : false,
    entry: ['./www/css/root.scss', './www/root.tsx'],
    mode: nodeEnvironment,
    module: {rules},
    // optimization,
    output: {
        assetModuleFilename: isDevelopment
            ? 'build-asset/[name]----[hash:6][ext][query]'
            : 'build-asset/[hash:6][ext][query]',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
        filename: isDevelopment ? '[name].js' : 'index.js',
        path: path.join(cwd, pathToDistribution),
        pathinfo: false,
        publicPath: isDevelopment ? '/' : pathToStaticFileFolder,
    },
    plugins,
    resolve: {alias, extensions},
    // devServer,
    // watchOptions: watchOptions,
};

const configBack: Configuration = {
    ...configFront,
    entry: ['./server/server.tsx'],
    externals,
    externalsPresets,
    // optimization: {minimize: false},
    target: 'node',
};

const configLibraryFront: Configuration = {
    devtool: 'source-map', // isServerProdBuild ? false : 'source-map',
    entry: ['./www/library/library.ts'],
    externals,
    externalsPresets,
    mode: nodeEnvironment,
    module: {rules},
    // optimization,
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        path: path.join(cwd, 'dist'),
        pathinfo: false,
        publicPath: '',
    },
    // devServer,
    plugins,
    resolve: {alias, extensions},
    // watchOptions: watchOptions,

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

const configLibraryBack: Configuration = {...configLibraryFront};

// eslint-disable-next-line complexity
const webpackConfig: Configuration = ((): Configuration => {
    if (isBuildLibrary && isFront) {
        return configLibraryFront;
    }

    if (isBuildLibrary && isBack) {
        return configLibraryBack;
    }

    if (!isBuildLibrary && isFront) {
        return configFront;
    }

    if (!isBuildLibrary && isBack) {
        return configBack;
    }

    throw new Error('Can not detect config');
})();

// webpackConfig?.plugins?.push(new BundleAnalyzerPlugin());

export const webpackRunningConfig = {...webpackConfig, devServer, optimization, watchOptions};
