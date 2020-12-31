// @flow

type TrackHumanTimeType = {|
    +minutes: string,
    +seconds: string,
|};

export function getTrackHumanTime(timeInSeconds: number): TrackHumanTimeType {
    return {
        minutes: String(Math.floor(timeInSeconds / 60)),
        seconds: String(Math.floor(timeInSeconds % 60)).padStart(2, '0'),
    };
}

export function getProgressHumanTime(currentTimeInSeconds: number, fullTimeInSeconds: number): string {
    const {minutes: currentTimeMinutes, seconds: currentTimeSeconds} = getTrackHumanTime(currentTimeInSeconds);
    const {minutes: fullTimeMinutes, seconds: fullTimeSeconds} = getTrackHumanTime(fullTimeInSeconds);

    const currentTimeResult = `${currentTimeMinutes}:${currentTimeSeconds}`;
    const fullTimeResult = `${fullTimeMinutes}:${fullTimeSeconds}`;

    return `${currentTimeResult} / ${fullTimeResult}`;
}
