/// <reference types="react" />
export declare type AudioPropsType = {
    className?: string;
    downloadFileName?: string;
    mediaMetadata?: MediaMetadataInit;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    src: string;
    useRepeatButton?: boolean;
};
export declare function Audio(props: AudioPropsType): JSX.Element;
