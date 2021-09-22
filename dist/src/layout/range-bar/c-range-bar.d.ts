/// <reference types="react" />
declare type PropsType = Readonly<{
    ariaLabel: string;
    className?: string;
    isDisable?: boolean;
    onChange: (value: number) => void;
    progress: number;
}>;
export declare function RangeBar(props: PropsType): JSX.Element;
export {};
