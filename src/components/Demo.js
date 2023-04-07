import React from "react";
import { useExternalScript } from "./useExternalScript";
// import { ComponentWithScript } from "./ComponentWithScript";
export const Demo = () => {

    const status = useExternalScript("https://tp.media/content?trs=219937&shmarker=422082&origin=SAO&locale=en_us&currency=brl&limit=8&powered_by=true&primary=%2332CD32&promo_id=7292&campaign_id=200");
    return (
        <div>
            {/* <div data-skyscanner-widget="SearchWidget"></div> */}
            {/* {status === "loading" && <p>loading...</p>} */}
            {/* {status === "ready" && <ComponentWithScript />} */}
        </div>
    );
};
