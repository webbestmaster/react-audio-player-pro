// @flow

export function getRandom(fromInclude: number, toExclude: number, excludeList?: Array<number>): number {
    if (toExclude - fromInclude < 1) {
        return fromInclude;
    }

    const randomNumber = fromInclude + Math.floor(Math.random() * (toExclude - fromInclude));

    if (!excludeList) {
        return randomNumber;
    }

    if (excludeList.includes(randomNumber)) {
        return getRandom(fromInclude, toExclude, excludeList);
    }

    return randomNumber;
}

export function addMetricPostfix(value: number): string {
    if (value < 1e3) {
        return String(value);
    }

    // 10^1		deca
    // 10^2		hecto
    // 10^3		kilo
    // 10^6		mega
    // 10^9		giga
    // 10^12	tera
    // 10^15	peta
    // 10^18	exa
    // 10^21	zetta
    // 10^24	yotta
    const postfixList = ['k', 'm', 'g', 't', 'p', 'e', 'z', 'y'];
    const postfixListLength = postfixList.length;

    // eslint-disable-next-line no-loops/no-loops
    for (let postfixIndex = 0; postfixIndex < postfixListLength; postfixIndex += 1) {
        const postfix = postfixList[postfixIndex];
        const divider = Math.pow(10, (postfixIndex + 1) * 3);

        if (value < divider * 1e3) {
            const integer = Math.floor(value / divider);
            const fractional = String(value % divider).padStart(3, '0');

            return `${integer},${fractional[0]}${postfix}`;
        }
    }

    return '999,9y';
}
