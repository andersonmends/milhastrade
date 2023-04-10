import React, { useEffect, useRef } from 'react';

export default function WayAwayWidget() {
    const divRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        // script.src = 'https://tp.media/content?trs=219937&shmarker=422082&origin=SAO&locale=en&currency=brl&limit=6&powered_by=true&width=960&primary=%23B9A0FD&promo_id=7292&campaign_id=200';
        script.src = 'https://tp.media/content?trs=219937&shmarker=422082&locale=en&powered_by=true&border_radius=0&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121';
        script.async = true;

        // adiciona o script ao elemento div
        divRef.current.appendChild(script);

        return () => {
            divRef.current.removeChild(script);
        };
    }, []);

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        margim: "10"
    };

    return <div ref={divRef} style={divStyle} />;
}


// import React from 'react';

// export default class WayAwayWidget extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         const s = document.createElement('script');
//         s.type = 'text/javascript';
//         s.src = "https://tp.media/content?trs=219937&shmarker=422082&locale=en&powered_by=true&border_radius=0&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121"
//         s.async = true;
//         s.innerHTML = "document.write('This is output by document.write()!')";
//         this.instance.appendChild(s);
//     }

//     render() {
//         return <div ref={el => (this.instance = el)} />;
//     }
// }
