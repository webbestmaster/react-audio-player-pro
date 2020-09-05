// @flow

export type ScreenWidthNameType = 'desktop' | 'tablet' | 'mobile';

export type SystemContextScreenType = {|
    +width: number,
    +height: number,
    +name: ScreenWidthNameType,
    +isDesktop: boolean,
    +isTablet: boolean,
    +isMobile: boolean,
    +littleThenList: Array<ScreenWidthNameType>,
    +isLandscape: boolean,
    +isPortrait: boolean,
    +devicePixelRatio: number,
|};

export type SystemContextType = {|
    +screen: SystemContextScreenType,
    +isIOS: boolean,
    +isAndroid: boolean,
    +isScriptLoaded: boolean,
    +isWindowLoaded: boolean,
|};
