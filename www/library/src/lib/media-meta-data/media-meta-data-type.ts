/* global MediaSessionAction, MediaSessionActionHandler */

export type MediaMetadataControlSettingType = Readonly<Partial<Record<MediaSessionAction, MediaSessionActionHandler>>>;
