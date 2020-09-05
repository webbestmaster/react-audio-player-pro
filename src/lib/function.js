// @flow

/* global setTimeout, clearTimeout,  */

// $FlowFixMe
export function debounce<FuncType>(wrappedFunction: FuncType, waitInMs: number, isImmediate?: boolean): FuncType {
    let timeout: TimeoutID | null = null;

    // $FlowFixMe
    return function debouncedFunction() {
        // eslint-disable-next-line consistent-this, babel/no-invalid-this
        const context = this;
        const argumentList = [...arguments];

        // eslint-disable-next-line unicorn/consistent-function-scoping
        function callLater() {
            timeout = null;

            if (!isImmediate) {
                // $FlowFixMe
                Reflect.apply(wrappedFunction, context, argumentList);
            }
        }

        const isCallNow = isImmediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(callLater, waitInMs);

        if (!isCallNow) {
            return;
        }

        // $FlowFixMe
        Reflect.apply(wrappedFunction, context, argumentList);
    };
}

export type NoopMixedType = () => mixed;
export type NoopVoidType = () => void;

export function noop(): null {
    return null;
}
