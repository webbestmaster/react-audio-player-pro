/// <reference types="react" />
declare type PropsType = {
    className?: string;
    downloadFileName?: string;
    mediaMetadata?: MediaMetadataInit;
    onDidMount?: (audioNode: HTMLAudioElement | null) => void;
    src: string;
    useRepeatButton?: boolean;
};
export declare function Audio(props: PropsType): JSX.Element;
export {};
