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
