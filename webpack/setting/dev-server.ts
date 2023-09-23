/* eslint-disable multiline-comment-style, capitalized-comments */
import type {WebpackOptionsNormalized} from "webpack";

import {webpackDevServerPort} from "../config";

const serverPort = 3011;
const host = "localhost";
// const host = '192.168.147.45';

/*
const mainProxyUrlSetting = {
    // pathRewrite: {'^/!*': ''},
    secure: false,
    target: 'https://api.site.io/',
    changeOrigin: true, // for this option only: see documentations here https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options
};
*/

export const devServer: WebpackOptionsNormalized["devServer"] = {
    historyApiFallback: {
        disableDotRule: true,
    },
    host,
    // contentBase: pathToDist,
    hot: true,
    // writeToDisk: isBack,
    // inline: false,
    port: webpackDevServerPort,
    proxy: {
        // TODO: need watch nginx
        "/api-image/": {
            target: `http://127.0.0.1:${serverPort}/`,
        },
        "/api/": {
            target: `http://127.0.0.1:${serverPort}/`,
        },
        // TODO: need watch nginx
        "/static-file/": {
            target: `http://127.0.0.1:${serverPort}/`,
        },
    },
    // hotOnly: false,
    // disableHostCheck: true,
    // proxy: {
    //     '/reports/': mainProxyUrlSetting,
    // },
    /*
    proxy: {
        '/op/api': {
            secure: false,
            target: 'https://my-best-web-site-ever.io',
            changeOrigin: true,
            cookieDomainRewrite: 'localhost',
            onProxyRes: proxyResponse => {
                if (proxyResponse.headers['set-cookie']) {
                    // Safari doesn't pass secure cookies from localhost origin
                    proxyResponse.headers['set-cookie'] = proxyResponse.headers['set-cookie'].map(cookie =>
                        cookie.replace(/; secure/gi, '')
                    );
                    // Safari doesn't pass SameSite=None cookies from localhost origin
                    proxyResponse.headers['set-cookie'] = proxyResponse.headers['set-cookie'].map(cookie =>
                        cookie.replace(/; SameSite=None/gi, '; SameSite=Strict')
                    );
                }
            },
        },
    },
*/
};
