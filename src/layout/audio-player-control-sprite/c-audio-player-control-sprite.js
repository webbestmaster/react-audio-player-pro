// @flow

/* eslint-disable max-len */

import React, {type Node} from 'react';

export const audioPlayerIconIdPrefix = 'audio-player-icon-id-prefix-';
export const mainFillColor = '#5a5a5a';

export function AudioPlayerControlSprite(): Node {
    return (
        <svg height="0" width="0">
            <symbol
                id={audioPlayerIconIdPrefix + 'button-pause-playlist'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z"
                    fill="#4285f4"
                />
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-pause'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M14 19h4V5h-4M6 19h4V5H6v14z" fill={mainFillColor}/>
            </symbol>
            <symbol id={audioPlayerIconIdPrefix + 'button-play'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.14v14l11-7-11-7z" fill={mainFillColor}/>
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-play-list'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19 9H2v2h17V9m0-4H2v2h17V5M2 15h13v-2H2v2m15-2v6l5-3-5-3z" fill={mainFillColor}/>
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-prev-track'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.5 12l8.5 6V6m-9 12V6l-8.5 6 8.5 6z" fill={mainFillColor}/>
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-next-track'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13 6v12l8.5-6M4 18l8.5-6L4 6v12z" fill={mainFillColor}/>
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-repeat'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17 17H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z" fill={mainFillColor}/>
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-repeat-one'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z"
                    fill={mainFillColor}
                />
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-shuffle'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.83 13.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13M14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4m-9.41 5.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41z"
                    fill={mainFillColor}
                />
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-sound-off'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 4L9.91 6.09 12 8.18M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21 21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.916 8.916 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63z"
                    fill={mainFillColor}
                />
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-sound-on'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z"
                    fill={mainFillColor}
                />
            </symbol>
            <symbol
                id={audioPlayerIconIdPrefix + 'button-download'}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" fill={mainFillColor}/>
            </symbol>
        </svg>
    );

    // <symbol id={audioPlayerIconIdPrefix + 'button-stop'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M18 18H6V6h12v12z" fill={mainFillColor}/>
    // </symbol>
}
