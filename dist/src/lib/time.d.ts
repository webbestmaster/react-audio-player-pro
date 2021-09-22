declare type TrackHumanTimeType = Readonly<{
    minutes: string;
    seconds: string;
}>;
export declare function getTrackHumanTime(timeInSeconds: number): TrackHumanTimeType;
export declare function getProgressHumanTime(currentTimeInSeconds: number, fullTimeInSeconds: number): string;
export {};
