// @flow

/* global File */

export function isNull(value: mixed): boolean %checks {
    return value === null;
}

export function isNotNull(value: mixed): boolean %checks {
    return value !== null;
}

export function isUndefined(value: mixed): boolean %checks {
    return typeof value === 'undefined';
}

export function isNotUndefined(value: mixed): boolean %checks {
    return typeof value !== 'undefined';
}

export function isBoolean(value: mixed): boolean %checks {
    return typeof value === 'boolean';
}

export function isNotBoolean(value: mixed): boolean %checks {
    return typeof value !== 'boolean';
}

export function isNumber(value: mixed): boolean %checks {
    return typeof value === 'number' && !Number.isNaN(value);
}

export function isNotNumber(value: mixed): boolean %checks {
    return typeof value !== 'number' || Number.isNaN(value);
}

export function isString(value: mixed): boolean %checks {
    return typeof value === 'string';
}

export function isNotString(value: mixed): boolean %checks {
    return typeof value !== 'string';
}

export function isFunction(value: mixed): boolean %checks {
    return value instanceof Function;
}

export function isNotFunction(value: mixed): boolean %checks {
    return !(value instanceof Function);
}

export function isError(value: mixed): boolean %checks {
    return value instanceof Error;
}

export function isNotError(value: mixed): boolean %checks {
    return !(value instanceof Error);
}

export function isObject(value: mixed): boolean %checks {
    return value instanceof Object;
}

export function isNotObject(value: mixed): boolean %checks {
    return !(value instanceof Object);
}

export function isFile(value: mixed): boolean %checks {
    return value instanceof File;
}

export function isNotFile(value: mixed): boolean %checks {
    return !(value instanceof File);
}

export function hasProperty(object: mixed, propertyName: string): boolean %checks {
    return Boolean(object) && Reflect.apply(Object.prototype.hasOwnProperty, object, [propertyName]);
}

export function hasNotProperty(object: mixed, propertyName: string): boolean %checks {
    return !hasProperty(object, propertyName);
}
