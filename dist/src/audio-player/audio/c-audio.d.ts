import type { AudioPreloadValueType } from "../../../library";
export interface AudioPropsType {
    readonly className?: string;
    readonly downloadFileName?: string;
    readonly duration?: number;
    readonly mediaMetadata?: MediaMetadataInit;
    readonly onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    readonly preload?: AudioPreloadValueType;
    readonly src: string;
    readonly useRepeatButton?: boolean;
}
export declare function Audio(props: AudioPropsType): JSX.Element;
