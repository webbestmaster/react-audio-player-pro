// @flow

/* global document */

type SetMetaInputType = {|
    +title: string,
    // +description: string,
|};

export function setMeta(metaData: SetMetaInputType) {
    if (typeof document === 'undefined') {
        console.error('document is undefined');
        return;
    }

    const {head} = document;

    if (!head) {
        return;
    }

    const title = head.querySelector('title');

    if (!title) {
        console.error('title', title);
        return;
    }

    title.innerHTML = metaData.title;

    // const description = head.querySelector('meta[name="description"]');

    // if (!description) {
    //     console.error('description', description);
    //     return;
    // }

    // description.setAttribute('content', metaData.description);
}

function sayHi() {
    const {log} = console;

    // Font: ANSI Shadow

    const hiString = `


███████╗██╗  ██╗ █████╗ ███████╗██╗  ██╗██╗
██╔════╝██║ ██╔╝██╔══██╗╚══███╔╝██║ ██╔╝██║
███████╗█████╔╝ ███████║  ███╔╝ █████╔╝ ██║
╚════██║██╔═██╗ ██╔══██║ ███╔╝  ██╔═██╗ ██║
███████║██║  ██╗██║  ██║███████╗██║  ██╗██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝

    ██╗      █████╗ ███╗   ██╗██████╗
    ██║     ██╔══██╗████╗  ██║██╔══██╗
    ██║     ███████║██╔██╗ ██║██║  ██║
    ██║     ██╔══██║██║╚██╗██║██║  ██║
    ███████╗██║  ██║██║ ╚████║██████╔╝
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝


`;

    log(hiString);
}

sayHi();
