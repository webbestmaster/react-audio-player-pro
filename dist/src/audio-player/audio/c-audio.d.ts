/// <reference types="react" />
import { AudioPreloadValueType } from '../../../library';
export type AudioPropsType = {
    className?: string;
    downloadFileName?: string;
    duration?: number;
    mediaMetadata?: MediaMetadataInit;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    preload?: AudioPreloadValueType;
    src: string;
    useRepeatButton?: boolean;
};
export declare function Audio(props: AudioPropsType): JSX.Element;
