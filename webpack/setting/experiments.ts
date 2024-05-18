import type {Configuration} from "webpack";

export const experiments: Configuration["experiments"] = {
    asyncWebAssembly: true,
    syncWebAssembly: true,
};
