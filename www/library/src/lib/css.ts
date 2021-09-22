type ClassNamesArgumentValueType = string | null | void;

type ClassNamesArgumentType = ClassNamesArgumentValueType | {[key: string]: ClassNamesArgumentValueType | boolean};

// eslint-disable-next-line complexity
export function classNames(...argumentList: Array<ClassNamesArgumentType>): string {
    const classNameList: Array<string> = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const classNameData of argumentList) {
        if (!classNameData) {
            // eslint-disable-next-line no-continue
            continue;
        }

        if (typeof classNameData === 'string') {
            classNameList.push(classNameData);
            // eslint-disable-next-line no-continue
            continue;
        }

        // eslint-disable-next-line no-loops/no-loops
        for (const key in classNameData) {
            if (classNameData[key]) {
                classNameList.push(key);
            }
        }
    }

    return classNameList.join(' ');
}
