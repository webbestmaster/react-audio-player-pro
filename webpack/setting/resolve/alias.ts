import path from "node:path";
import {cwd} from "node:process";

import {isFront, isProduction} from "../../config";

const duplicateList = ["rc-resize-observer", "isarray", "@segment/isodate", "component-type", "uuid", "ms", "debug"];

export const alias: Record<string, string> = duplicateList.reduce(
    (accumulator: Record<string, string>, packageName: string) => {
        return {...accumulator, [packageName]: path.resolve(cwd(), `node_modules/${packageName}`)};
    },
    {}
);

if (isProduction && isFront) {
    // Remove ajv from build for prod
    alias.ajv = path.resolve(cwd(), "www", "util", "ajv-fake");
}
