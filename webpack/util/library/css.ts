// there is real dirt workaround, but I do not know way better (((

import path from 'node:path';
import fileSystem from 'node:fs/promises';

import {pathToDistribution, cwd} from '../../config';

// eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-var-requires
const packageJsonData: Record<string, unknown> = require(path.join(cwd, 'package.json'));
const packageName = String(packageJsonData.name);

const rootPathToStyle: string = path.join(pathToDistribution, '..', 'style.css');
const rootPathToTyping: string = path.join(pathToDistribution, '..', 'library.d.ts');

const pathToStyle: string = path.join(cwd, rootPathToStyle);
const pathToTyping: string = path.join(cwd, rootPathToTyping);

const styleDeclaration = `
declare module '${packageName}/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
`;

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
    const isStyleFileExists: boolean = await fileSystem
        .access(pathToStyle)
        .then((): true => true)
        .catch((): false => false);

    if (!isStyleFileExists) {
        console.log(`[css util] file ${pathToStyle} is not exists.`);
        return;
    }

    // if library.d.ts is not exists -> throw error
    await fileSystem.access(pathToTyping);

    await fileSystem.appendFile(pathToTyping, styleDeclaration);

    console.log('[css util] declaration for css has been added.');
})();
