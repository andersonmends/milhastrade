import React, { useEffect } from 'react';

export default function SkyscannerSearchWidget() {
    useEffect(() => {
        const skyscannerWidget = document.createElement('script');
        skyscannerWidget.src = 'https://widgets.skyscanner.net/widget-server/js/loader.js';
        skyscannerWidget.async = true;
        document.body.appendChild(skyscannerWidget);
        

        return () => {
            document.body.removeChild(skyscannerWidget);
        }
    }, []);

    return (
        <div data-skyscanner-widget="FlightSearchWidget" data-locale="en-GB"></div>
    );
}
