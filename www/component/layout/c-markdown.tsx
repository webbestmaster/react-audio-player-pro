import {markdown, MarkdownConfigShallowType, classNameMdProThemeLight, classNameMdPro} from 'markdown-pro';
import 'markdown-pro/dist/style.css';

type PropsType = {
    config?: MarkdownConfigShallowType;
    mdInput: string;
};

export function Markdown(props: PropsType): JSX.Element {
    const {mdInput, config} = props;

    const className = [classNameMdPro, classNameMdProThemeLight].join(' ');

    // eslint-disable-next-line react/no-danger, id-match
    return <div className={className} dangerouslySetInnerHTML={{__html: markdown(mdInput, config)}} />;
}
