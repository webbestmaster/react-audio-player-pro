// @flow

export function promiseCatch(error: Error): Error {
    // console.error('Promise catch!');
    // console.log(error);

    return error;
}

export type PromiseResolveType<Result> = (result: Result) => mixed;
