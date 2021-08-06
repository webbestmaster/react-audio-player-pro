/* eslint-disable unicorn/prefer-module */

const path = require('path');

const {cwd} = require('../../config');

const duplicateList = ['regenerator-runtime'];

// eslint-disable-next-line unicorn/prefer-object-from-entries
module.exports.alias = duplicateList.reduce((accumulator, packageName) => {
    return {...accumulator, [packageName]: path.resolve(cwd, `node_modules/${packageName}`)};
}, {});
