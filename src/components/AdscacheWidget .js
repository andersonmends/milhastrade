import { useEffect, useRef } from 'react'
export default function AdscacheWidget(){
    const banner = useRef (null)

    const atOptions = {
        key: '4ad6eac52894fc6552bf0ca1803d009d',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    useEffect(() => {
        if (!banner.current.firstChild) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

            if (banner.current) {
                banner.current.append(conf)
                banner.current.append(script)
            }
        }
    }, [])

    return <div ref={banner}></div>
}

// import React from 'react';

// class AdscacheWidget extends React.Component {
//     componentDidMount() {
//         const script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = `//www.profitabledisplaynetwork.com/9261487115ae2dbc55e3e0aa3ac97dae/invoke.js?key=${this.props.apiKey}&format=${this.props.format}&height=${this.props.height}&width=${this.props.width}`;
//         document.body.appendChild(script);
//     }

//     render() {
//         return <div id="widget" />;
//     }
// }

// export default AdscacheWidget;



// import React, { useEffect } from 'react';

// const AdscacheWidget = () => {

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = '//achcdn.com/script/suv4.js';
//         script.async = true;
//         document.body.appendChild(script);
//     }, []);

//     return <div id="adscache-widget" />;
// };

// export default AdscacheWidget;


// import React from 'react';

// const AdscacheWidget = () => {
//     return (
//         <div>
//             <script src="//brightonclick.com/a/display.php?r=6903718" type="text/javascript" />
//         </div>
//     );
// };

// export default AdscacheWidget;


// import React, { useEffect } from 'react';

// function AdscacheWidget() {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = "//achcdn.com/script/suv4.js";
//         script.async = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script);
//         }
//     }, []);

//     return <div></div>;
// }

// export default AdscacheWidget;

// import React from "react";

// const AdscacheWidget = () => {
//     return (
//         <div
//             style={{
//                 position: "relative",
//                 zIndex: 9999 // ou qualquer valor alto o suficiente
//             }}
//             dangerouslySetInnerHTML={{
//                 __html: `<script data-cfasync="false" type="text/javascript" src="//brightonclick.com/a/display.php?r=6903718"></script>`
//             }}
//         />
//     );
// };

// export default AdscacheWidget;


