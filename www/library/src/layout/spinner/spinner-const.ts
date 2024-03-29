import type {PositionType} from "./spinner-type";

export const defaultData = {
    size: 48,
};

export const positionValueMap: Record<PositionType, PositionType> = {
    absolute: "absolute",
    fixed: "fixed",
    relative: "relative",
    "static": "static",
};
