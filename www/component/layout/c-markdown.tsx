import "markdown-pro/dist/style.css";

import {classNameMdPro, classNameMdProThemeLight, markdown, type MarkdownConfigShallowType} from "markdown-pro";
import type {JSX} from "react";

interface PropsType {
    readonly config?: MarkdownConfigShallowType;
    readonly mdInput: string;
}

export function Markdown(props: PropsType): JSX.Element {
    const {mdInput, config} = props;

    const className = [classNameMdPro, classNameMdProThemeLight].join(" ");

    return <div className={className} dangerouslySetInnerHTML={{__html: markdown(mdInput, config)}} />;
}
