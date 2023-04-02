import React from "react";
import { useExternalScript } from "./useExternalScript";
// import { ComponentWithScript } from "./ComponentWithScript";
export const Demo = () => {

    const status = useExternalScript("https://widgets.skyscanner.net/widget-server/js/loader.js");
    return (
        <div>
            <div data-skyscanner-widget="SearchWidget"></div>
            {/* {status === "loading" && <p>loading...</p>} */}
            {/* {status === "ready" && <ComponentWithScript />} */}
        </div>
    );
};
