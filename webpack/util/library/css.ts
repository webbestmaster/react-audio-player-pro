// There is real dirt workaround, but I do not know way better (((

import {cwd} from 'node:process';
import path from 'node:path';
import fileSystem from 'node:fs/promises';

import {pathToDistribution} from '../../config';

// eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
const packageJsonData: Record<string, unknown> = require(path.join(cwd(), 'package.json'));
const packageName = String(packageJsonData.name);

const rootPathToStyle: string = path.join(pathToDistribution, '..', 'style.css');
const rootPathToTyping: string = path.join(pathToDistribution, '..', 'library.d.ts');

const pathToStyle: string = path.join(cwd(), rootPathToStyle);
const pathToTyping: string = path.join(cwd(), rootPathToTyping);

const styleDeclaration = `
declare module '${packageName}/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
`;

async function innerInitialization() {
    const isStyleFileExists: boolean = await fileSystem
        .access(pathToStyle)
        .then((): true => {
            return true;
        })
        .catch((): false => {
            return false;
        });

    if (!isStyleFileExists) {
        console.log(`[css util] file ${pathToStyle} is not exists.`);
        return;
    }

    // If library.d.ts is not exists -> throw error
    await fileSystem.access(pathToTyping);

    await fileSystem.appendFile(pathToTyping, styleDeclaration);

    console.log('[css util] declaration for css has been added.');
}

// eslint-disable-next-line unicorn/prefer-top-level-await, @typescript-eslint/no-floating-promises
innerInitialization();
