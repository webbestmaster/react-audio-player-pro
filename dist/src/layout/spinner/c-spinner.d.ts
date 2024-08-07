import type { PositionType } from "./spinner-type";
type PropsType = Readonly<{
    arcColor?: string;
    circleColor?: string;
    className?: string;
    isShow?: boolean;
    lineWidth?: number;
    position?: PositionType;
    size?: number;
    wrapperColor?: string;
    wrapperHeight?: number | string;
    wrapperPadding?: number | string;
    wrapperWidth?: number | string;
}>;
export declare function Spinner(props: PropsType): JSX.Element | null;
export {};
