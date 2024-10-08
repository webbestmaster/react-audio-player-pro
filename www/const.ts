/* global BUILD_DATE_H, IS_PRODUCTION */

export const selector = {
    appWrapper: ".js-app-wrapper",
};

export const demoUrl = "https://webbestmaster.github.io/react-audio-player-pro";

function sayHi(): void {
    const {log} = console;

    // http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Empty, font: ANSI Shadow
    const hiString = `


    ██████╗ ███████╗ █████╗  ██████╗████████╗
    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
    ██████╔╝█████╗  ███████║██║        ██║
    ██╔══██╗██╔══╝  ██╔══██║██║        ██║
    ██║  ██║███████╗██║  ██║╚██████╗   ██║
    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝

     █████╗ ██╗   ██╗██████╗ ██╗ ██████╗
    ██╔══██╗██║   ██║██╔══██╗██║██╔═══██╗
    ███████║██║   ██║██║  ██║██║██║   ██║
    ██╔══██║██║   ██║██║  ██║██║██║   ██║
    ██║  ██║╚██████╔╝██████╔╝██║╚██████╔╝
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝

    ██████╗ ██╗      █████╗ ██╗   ██╗███████╗██████╗
    ██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗
    ██████╔╝██║     ███████║ ╚████╔╝ █████╗  ██████╔╝
    ██╔═══╝ ██║     ██╔══██║  ╚██╔╝  ██╔══╝  ██╔══██╗
    ██║     ███████╗██║  ██║   ██║   ███████╗██║  ██║
    ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝


`;

    log(hiString);

    log("Build date:", BUILD_DATE_H);
    log("Is production:", IS_PRODUCTION);
}

// eslint-disable-next-line jest/require-hook
sayHi();
