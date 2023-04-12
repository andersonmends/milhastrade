import React from "react";
import { useExternalScript } from "./useExternalScript";
// import { ComponentWithScript } from "./ComponentWithScript";
export const Demo = () => {

    const status = useExternalScript("//brightonclick.com/a/display.php?r=6903718");
    return (
        <div>
            {/* <div data-skyscanner-widget="SearchWidget"></div> */}
            {status === "loading" && <p>loading...</p>}
            {/* {status === "ready" && <ComponentWithScript />} */}
        </div>
    );
};
