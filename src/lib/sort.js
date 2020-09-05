// @flow

function trimEqualStart(fullValueA: string, fullValueB: string): [string, string] {
    let trimIndex: number = 0;

    const valueA = fullValueA.trim().toLowerCase();
    const valueB = fullValueB.trim().toLowerCase();
    const [littleString, biggerString] = fullValueA.length < fullValueB.length ? [valueA, valueB] : [valueB, valueA];

    Reflect.apply(Array.prototype.every, littleString, [
        (char: string, index: number): boolean => {
            if (char === biggerString[index]) {
                trimIndex = index + 1;
                return true;
            }
            return false;
        },
    ]);

    return [fullValueA.slice(trimIndex), fullValueB.slice(trimIndex)];
}

export function sortXCallback(fullValueA: string, fullValueB: string): number {
    const [valueA, valueB] = trimEqualStart(fullValueA, fullValueB);

    const numberA = Number.parseFloat(valueA);
    const numberB = Number.parseFloat(valueB);

    if (!Number.isNaN(numberA) && !Number.isNaN(numberB)) {
        return numberA - numberB;
    }

    return valueA.localeCompare(valueB);
}

export function sortXCallbackReverse(fullValueA: string, fullValueB: string): number {
    return sortXCallback(fullValueB, fullValueA);
}

// console.log(['2ww', '10ww', '3ww'].sort(sortXCallback));
// console.log(['w2ww', 'w10ww', 'w3ww'].sort(sortXCallback));
// console.log(['w02ww', 'w1ww', 'w3ww'].sort(sortXCallback));
// console.log(['c', 'a', 'B', ''].sort(sortXCallback));
