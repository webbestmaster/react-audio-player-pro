type ClassNamesArgumentValueType = string | null | undefined;
type ClassNamesArgumentType = ClassNamesArgumentValueType | Record<string, ClassNamesArgumentValueType | boolean>;
export declare function cls(...argumentList: ReadonlyArray<ClassNamesArgumentType>): string;
export {};
