type ClassNamesArgumentValueType = string | null | undefined;

type ClassNamesArgumentType = ClassNamesArgumentValueType | Record<string, ClassNamesArgumentValueType | boolean>;

// eslint-disable-next-line complexity
export function cls(...argumentList: ReadonlyArray<ClassNamesArgumentType>): string {
    // eslint-disable-next-line unicorn/no-keyword-prefix
    const classNameList: Array<string> = [];

    // eslint-disable-next-line no-loops/no-loops, unicorn/no-keyword-prefix
    for (const classNameData of argumentList) {
        // eslint-disable-next-line unicorn/no-keyword-prefix, @typescript-eslint/strict-boolean-expressions
        if (!classNameData) {
            // eslint-disable-next-line no-continue
            continue;
        }

        // eslint-disable-next-line unicorn/no-keyword-prefix
        if (typeof classNameData === "string") {
            // eslint-disable-next-line unicorn/no-keyword-prefix
            classNameList.push(classNameData);
            // eslint-disable-next-line no-continue
            continue;
        }

        // eslint-disable-next-line no-loops/no-loops, unicorn/no-keyword-prefix
        for (const key in classNameData) {
            // eslint-disable-next-line unicorn/no-keyword-prefix, @typescript-eslint/strict-boolean-expressions
            if (classNameData[key]) {
                // eslint-disable-next-line unicorn/no-keyword-prefix
                classNameList.push(key);
            }
        }
    }

    // eslint-disable-next-line unicorn/no-keyword-prefix
    return classNameList.join(" ");
}
