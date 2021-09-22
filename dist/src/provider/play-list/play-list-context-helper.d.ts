import { SavedTrackType, TrackType } from '../../../library';
import { PlayListContextType } from './play-list-context-type';
export declare function getDefaultPlayListContextData(): PlayListContextType;
export declare function isTracksEquals(trackA: SavedTrackType | TrackType, trackB: SavedTrackType | TrackType): boolean;
export declare function savedTrackToTrack(savedTrack: SavedTrackType): TrackType;
