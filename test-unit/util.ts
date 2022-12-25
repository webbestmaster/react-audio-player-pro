/* global setTimeout */

export function waitForTime(timeInMilliseconds: number): Promise<void> {
    return new Promise((resolve: () => void) => {
        setTimeout(resolve, timeInMilliseconds);
    });
}

/*
export type WaitForOptionsType = {
    condition: () => Promise<boolean> | boolean,
    count: number,
    timeInterval: number
}
*/
/*

export async function waitFor(waitForOptions: WaitForOptionsType): Promise<void> {
    const {count, timeInterval, condition} = waitForOptions;
    const isConditionDone = await condition();

    if (isConditionDone) {
        return;
    }

    if (count <= 0) {
        throw new Error('Not able to wait more');
    }

    await waitForTime(timeInterval);

    await waitFor({
        condition,
        count: count - 1,
        timeInterval,
    });
}
*/
