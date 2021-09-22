import {markdown, MarkdownConfigType} from 'markdown-pro';

type PropsType = {
    config?: MarkdownConfigType;
    mdInput: string;
};

export function Markdown(props: PropsType): JSX.Element {
    const {mdInput, config} = props;

    // eslint-disable-next-line react/no-danger, id-match
    return <div className="md-pro" dangerouslySetInnerHTML={{__html: markdown(mdInput, config)}} />;
}
