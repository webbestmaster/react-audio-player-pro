import type {SavedTrackType, TrackType} from "../../../../library";

export function getActualContent(track: SavedTrackType | TrackType): JSX.Element | string {
    const {content, mediaMetadata, src} = track;

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (content) {
        return content;
    }

    const mediaTitle = mediaMetadata?.title;

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
