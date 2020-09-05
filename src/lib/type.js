// @flow

// How to use
// 1 - define a type
// > type CheckType = { prop1: SomeType, prop2: OtherType };
// 2 - next line throw error in runtime if type is wrong
// > const checkedFormData: CheckType = typeConverter<CheckType>(formData);

export function typeConverter<NeededType>(someObject: mixed): NeededType {
    // $FlowFixMe
    return someObject;
}

export type NullableType<SomeType> = SomeType | null;

function numberToInt(value: number): number {
    return Number.parseInt(String(value), 10);
}

export function mixedToNumber(value: mixed, fallbackValue: number): number {
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return value;
    }

    if (typeof value === 'string') {
        const parsedString = Number.parseInt(value, 10);

        return Number.isNaN(parsedString) ? fallbackValue : parsedString;
    }

    return fallbackValue;
}

export function mixedToInt(value: mixed, fallbackValue: number): number {
    return numberToInt(mixedToNumber(value, fallbackValue));
}
