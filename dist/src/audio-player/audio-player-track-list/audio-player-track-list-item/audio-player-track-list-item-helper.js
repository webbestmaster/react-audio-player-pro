// eslint-disable-next-line complexity
export function getActualContent(track) {
    const { content, mediaMetadata, src } = track;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (content) {
        return content;
    }
    const mediaTitle = mediaMetadata === null || mediaMetadata === void 0 ? void 0 : mediaMetadata.title;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (mediaTitle) {
        return mediaTitle;
    }
    const fileName = src.split("/").pop();
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!fileName) {
        return "";
    }
    const indexOfExtension = fileName.lastIndexOf(".");
    if (indexOfExtension > 0) {
        return fileName.slice(0, indexOfExtension);
    }
    return fileName;
}
//# sourceMappingURL=audio-player-track-list-item-helper.js.map