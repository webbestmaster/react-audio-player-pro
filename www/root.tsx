/* global document */

import {createRoot} from "react-dom/client";

import {App} from "./component/app/app";
import {selector} from "./const";

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper === null) {
    console.error("Can not find nodeWrapper");
} else {
    createRoot(nodeWrapper).render(<App />);
}
