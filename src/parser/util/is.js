// @flow

export function hasProperty(object: mixed, propertyName: string): boolean %checks {
    return Boolean(object) && Reflect.apply(Object.prototype.hasOwnProperty, object, [propertyName]);
}

/*
export function hasNotProperty(object: mixed, propertyName: string): boolean %checks {
    return !hasProperty(object, propertyName);
}
*/
