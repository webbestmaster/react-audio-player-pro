const {pathToDist, webpackDevServerPort} = require('./../config');
const {isBack} = require('../config');

const serverPort = 3011;
const host = 'localhost';
// const host = '192.168.147.45';

/*
const mainProxyUrlSetting = {
    // pathRewrite: {'^/!*': ''},
    secure: false,
    target: 'https://api.site.io/',
    changeOrigin: true, // for this option only: see documentations here https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options
};
*/

module.exports.devServer = {
    host,
    port: webpackDevServerPort,
    // contentBase: pathToDist,
    historyApiFallback: {
        disableDotRule: true,
    },
    // writeToDisk: isBack,
    // inline: false,
    hot: true,
    proxy: {
        '/api/': {
            target: `http://127.0.0.1:${serverPort}/`,
        },
        // TODO: need watch nginx
        '/api-image/': {
            target: `http://127.0.0.1:${serverPort}/`,
        },
        // TODO: need watch nginx
        '/static-file/': {
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
