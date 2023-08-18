import {SavedTrackType, TrackType} from "../../../../library";

// eslint-disable-next-line complexity
export function getActualContent(track: SavedTrackType | TrackType): JSX.Element | string {
    const {content, mediaMetadata, src} = track;

    if (content) {
        return content;
    }

    const mediaTitle = mediaMetadata?.title;

    if (mediaTitle) {
        return mediaTitle;
    }

    const fileName = src.split("/").pop();

    if (!fileName) {
        return "";
    }

    const indexOfExtension = fileName.lastIndexOf(".");

    if (indexOfExtension > 0) {
        return fileName.slice(0, indexOfExtension);
    }

    return fileName;
}
