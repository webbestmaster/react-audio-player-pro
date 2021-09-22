import {markdown, MarkdownConfigShallowType} from 'markdown-pro';
import 'markdown-pro/dist/style.css';

type PropsType = {
    config?: MarkdownConfigShallowType;
    mdInput: string;
};

export function Markdown(props: PropsType): JSX.Element {
    const {mdInput, config} = props;

    // eslint-disable-next-line react/no-danger, id-match
    return <div className="md-pro" dangerouslySetInnerHTML={{__html: markdown(mdInput, config)}} />;
}
