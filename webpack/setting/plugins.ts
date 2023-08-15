import {Configuration, ContextReplacementPlugin, DefinePlugin, WebpackPluginInstance, Compiler} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';

import {isProduction, isDevelopment, isBuildLibrary} from '../config';

const filePathPrefix = isProduction ? './../' : './';

const date = new Date();

const definePluginParameters: Record<string, string> = {
    // eslint-disable-next-line id-match
    // BUILD_DATE: JSON.stringify(date.getTime()),
    // eslint-disable-next-line id-match
    BUILD_DATE_H: JSON.stringify(date.toISOString()),
    // NODE_ENV: JSON.stringify(NODE_ENV),
    IS_PRODUCTION: JSON.stringify(isProduction),
    /*
     * PROJECT_ID: JSON.stringify('my-best-project')
     * IS_DEVELOPMENT: JSON.stringify(IS_DEVELOPMENT)
     */
};

type StaticFilesDataType = Record<'from' | 'to', string>;

const staticFilesSiteList: Array<StaticFilesDataType> = ['favicon.ico'].map<StaticFilesDataType>(
    (fileName: string): StaticFilesDataType => {
        return {
            from: `./www/${fileName}`,
            to: `${filePathPrefix}${fileName}`,
        };
    }
);

const duplicateCheckerPluginInstance: WebpackPluginInstance = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    apply: (compiler: Compiler): void => {
        // eslint-disable-next-line no-undefined
        return undefined;
    },
    ...new DuplicatePackageCheckerPlugin(),
};

const pluginList: Configuration['plugins'] = [
    new CircularDependencyPlugin({exclude: /node_modules/u}),
    duplicateCheckerPluginInstance,
    new CleanWebpackPlugin(),
    new DefinePlugin(definePluginParameters),
    new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'defer'}),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output, both options are optional
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash:6].css',
        filename: isDevelopment ? '[name].css' : 'style.css',
    }),
    new HtmlWebpackPlugin({
        filename: `${filePathPrefix}index.html`,
        hash: true,
        minify: {
            collapseWhitespace: isProduction,
            keepClosingSlash: true,
            minifyCSS: isProduction,
            minifyJS: isProduction,
            removeComments: isProduction,
        },
        template: './www/index.html',
    }),
    new CopyWebpackPlugin({
        patterns: staticFilesSiteList,
    }),
    new ContextReplacementPlugin(/moment[/\\]locale$/u, /en|ru/u),
];

const pluginBuildLibraryList: Configuration['plugins'] = [
    new CircularDependencyPlugin({exclude: /node_modules/u}),
    duplicateCheckerPluginInstance,
    new CleanWebpackPlugin(),
    new DefinePlugin(definePluginParameters),
    // ignored new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'defer'}),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output, both options are optional
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash:6].css',
        filename: isDevelopment ? '[name].css' : 'style.css',
    }),
    new ContextReplacementPlugin(/moment[/\\]locale$/u, /en|ru/u),
];

export const plugins = isBuildLibrary ? pluginBuildLibraryList : pluginList;
