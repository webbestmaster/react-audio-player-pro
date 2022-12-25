type ClassNamesArgumentValueType = string | null | void;
type ClassNamesArgumentType = ClassNamesArgumentValueType | {
    [key: string]: ClassNamesArgumentValueType | boolean;
};
export declare function classNames(...argumentList: Array<ClassNamesArgumentType>): string;
export {};
