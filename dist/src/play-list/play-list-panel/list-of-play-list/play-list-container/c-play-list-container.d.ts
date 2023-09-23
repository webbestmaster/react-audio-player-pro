/// <reference types="react" />
import type { PlayListType } from "../../../../provider/play-list/play-list-context-type";
type PropsType = Readonly<{
    playList: PlayListType;
}>;
export declare function PlayListContainer(props: PropsType): JSX.Element;
export {};
