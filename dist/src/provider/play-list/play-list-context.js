import { createContext } from 'react';
import { getDefaultPlayListContextData } from './play-list-context-helper';
const defaultPlayListContextData = getDefaultPlayListContextData();
export const PlayListContext = createContext(defaultPlayListContextData);
//# sourceMappingURL=play-list-context.js.map