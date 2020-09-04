const path = require('path');

const {cwd} = require('../../config');

const duplicateList = ['regenerator-runtime'];

module.exports.alias = duplicateList.reduce((accumulator, packageName) => {
    return {...accumulator, [packageName]: path.resolve(cwd, `node_modules/${packageName}`)};
}, {});
