// there is real dirt workaround, but I do not know way better (((

const path = require('path');
const {promises: fileSystem} = require('fs');

const {pathToDist, cwd} = require('../../config');

const {name: packageName} = require(path.join(cwd, 'package.json'));

const rootPathToStyle = path.join(pathToDist, '..', 'style.css');
const rootPathToTyping = path.join(pathToDist, '..', 'library.d.ts');

const pathToStyle = path.join(cwd, rootPathToStyle);
const pathToTyping = path.join(cwd, rootPathToTyping);

const styleDeclaration = `
declare module '${packageName}/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
`;

(async () => {
    const isStyleFileExists = await fileSystem
        .access(pathToStyle)
        .then(() => true)
        .catch(() => false);

    if (!isStyleFileExists) {
        console.log(`[css util] file ${pathToStyle} is not exists.`);
        return;
    }

    // if library.d.ts is not exists -> throw error
    await fileSystem.access(pathToTyping);

    await fileSystem.appendFile(pathToTyping, styleDeclaration);

    console.log('[css util] declaration for css has been added.');
})();
