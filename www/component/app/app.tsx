import {StrictMode} from "react";

import {ExampleAudio} from "../example-audio/c-example-audio";
import {ExamplePlayer} from "../example-audio-player/c-example-audio-player";

export function App(): JSX.Element {
    return (
        <StrictMode>
            <ExampleAudio />

            <ExamplePlayer />
        </StrictMode>
    );
}
