export function getTrackHumanTime(timeInSeconds) {
    return {
        minutes: String(Math.floor(timeInSeconds / 60)),
        seconds: String(Math.floor(timeInSeconds % 60)).padStart(2, '0'),
    };
}
export function getProgressHumanTime(currentTimeInSeconds, fullTimeInSeconds) {
    const { minutes: currentTimeMinutes, seconds: currentTimeSeconds } = getTrackHumanTime(currentTimeInSeconds);
    const { minutes: fullTimeMinutes, seconds: fullTimeSeconds } = getTrackHumanTime(fullTimeInSeconds);
    const currentTimeResult = `${currentTimeMinutes}:${currentTimeSeconds}`;
    const fullTimeResult = `${fullTimeMinutes}:${fullTimeSeconds}`;
    return `${currentTimeResult} / ${fullTimeResult}`;
}
//# sourceMappingURL=time.js.map