export function cls(...argumentList) {
    const classNameList = [];
    for (const classNameData of argumentList) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!classNameData) {
            // eslint-disable-next-line no-continue
            continue;
        }
        if (typeof classNameData === "string") {
            classNameList.push(classNameData);
            // eslint-disable-next-line no-continue
            continue;
        }
        for (const key in classNameData) {
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (classNameData[key]) {
                classNameList.push(key);
            }
        }
    }
    return classNameList.join(" ");
}
//# sourceMappingURL=css.js.map