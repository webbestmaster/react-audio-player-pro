import type { AudioPlayerControlTagNameType } from "./audio-player-control-button-type";
type PropsType = Readonly<{
    ariaLabel: string;
    className?: string;
    hasBorder?: boolean;
    imageId: string;
    isActive?: boolean;
    isHideForNarrow?: boolean;
    onClick?: () => unknown;
    tag?: AudioPlayerControlTagNameType;
}>;
export declare function AudioPlayerControlButton(props: PropsType): JSX.Element;
export {};
