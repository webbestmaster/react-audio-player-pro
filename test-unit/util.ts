/* global setTimeout */

export function waitForTime(timeInMilliseconds: number): Promise<void> {
    return new Promise((resolve: () => void) => {
        setTimeout(resolve, timeInMilliseconds);
    });
}
