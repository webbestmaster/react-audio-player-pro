import {type Context, createContext} from "react";

import {getDefaultPlayListContextData} from "./play-list-context-helper";
import type {PlayListContextType} from "./play-list-context-type";

const defaultPlayListContextData = getDefaultPlayListContextData();

export const PlayListContext: Context<PlayListContextType> =
    createContext<PlayListContextType>(defaultPlayListContextData);
