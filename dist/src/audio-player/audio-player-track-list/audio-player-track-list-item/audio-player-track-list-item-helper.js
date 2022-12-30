// eslint-disable-next-line complexity
export function getActualContent(track) {
    const { content, mediaMetadata, src } = track;
    if (content) {
        return content;
    }
    const mediaTitle = mediaMetadata && mediaMetadata.title;
    if (mediaTitle) {
        return mediaTitle;
    }
    const fileName = src.split('/').pop();
    if (!fileName) {
        return '';
    }
    const indexOfExtension = fileName.lastIndexOf('.');
    if (indexOfExtension > 0) {
        return fileName.slice(0, indexOfExtension);
    }
    return fileName;
}
//# sourceMappingURL=audio-player-track-list-item-helper.js.map