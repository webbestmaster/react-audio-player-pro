// eslint-disable-next-line unicorn/no-keyword-prefix
import {markdown, MarkdownConfigShallowType, classNameMdProThemeLight, classNameMdPro} from 'markdown-pro';
import 'markdown-pro/dist/style.css';

interface PropsType {
    readonly config?: MarkdownConfigShallowType;
    readonly mdInput: string;
}

export function Markdown(props: PropsType): JSX.Element {
    const {mdInput, config} = props;

    // eslint-disable-next-line unicorn/no-keyword-prefix
    const className = [classNameMdPro, classNameMdProThemeLight].join(' ');

    // eslint-disable-next-line react/no-danger, id-match, unicorn/no-keyword-prefix
    return <div className={className} dangerouslySetInnerHTML={{__html: markdown(mdInput, config)}} />;
}
