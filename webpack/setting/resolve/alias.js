const path = require('path');

const {cwd, isProduction, isFront} = require('../../config');

const duplicateList = ['rc-resize-observer', 'isarray', '@segment/isodate', 'component-type', 'uuid', 'ms', 'debug'];

const alias = duplicateList.reduce((accumulator, packageName) => {
    return {...accumulator, [packageName]: path.resolve(cwd, `node_modules/${packageName}`)};
}, {});

if (isProduction && isFront) {
    // remove ajv from build for prod
    alias.ajv = path.resolve(cwd, 'www', 'util', 'ajv-fake');
}

module.exports.alias = alias;
