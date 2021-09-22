/// <reference types="react" />
import { AudioPlayerControlTagNameType } from './audio-player-control-button-type';
declare type PropsType = Readonly<{
    ariaLabel: string;
    className?: string;
    hasBorder?: boolean;
    imageId: string;
    isActive?: boolean;
    onClick?: () => unknown;
    tag?: AudioPlayerControlTagNameType;
}>;
export declare function AudioPlayerControlButton(props: PropsType): JSX.Element;
export {};
