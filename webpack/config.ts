/* eslint id-match: 0, optimize-regex/optimize-regex: 0, multiline-comment-style: 0, capitalized-comments: 0 */

import {env} from "node:process";

export const pathToStaticFileFolder = "/static/";

const modeDevelopmentName = "development" as const;
const modeProductionName = "production" as const;

export const isDevelopment: boolean = env.NODE_ENV === modeDevelopmentName;
export const isProduction: boolean = env.NODE_ENV === modeProductionName;
export const nodeEnvironment: "development" | "production" = isProduction ? modeProductionName : modeDevelopmentName;
export const isBuildLibrary: boolean = env.IS_BUILD_LIBRARY === "true";
export const isFront: boolean = env.SIDE === "front";
export const isBack: boolean = env.SIDE === "back";
// export const isServerProdBuild: boolean = process.env.IS_SERVER_PROD_BUILD === "true";
export const isTsTranspileOnly: boolean = env.TS_TRANSPILE_ONLY === "true";

export const fileRegExp = /\.(svg|webp|png|jpg|jpeg|gif|otf|ttf|woff|woff2|eot|mp3)$/u;

const pathToDistributionFront: string | null = isFront ? `/dist${pathToStaticFileFolder}` : null;
const pathToDistributionBack: string | null = isBack ? "/dist-server/dist/" : null;

export const pathToDistribution: string = pathToDistributionFront ?? pathToDistributionBack ?? "NO PATH DEFINED!!!";

export const webpackDevServerPort = 9090;
