const autoprefixer = require('autoprefixer');

module.exports = ({file, options, environment}) => ({
    plugins: [
        autoprefixer({
            overrideBrowserslist: ['last 1 version', '> 1%', 'IE 10'],
        }),
    ],
});
