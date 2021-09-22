const path = require('path');

const {cwd} = require('../../config');

const duplicateList = ['rc-resize-observer', 'isarray', '@segment/isodate', 'component-type', 'uuid', 'ms', 'debug'];

module.exports.alias = duplicateList.reduce((accumulator, packageName) => {
    return {...accumulator, [packageName]: path.resolve(cwd, `node_modules/${packageName}`)};
}, {});
