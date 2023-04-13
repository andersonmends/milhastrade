// import React, { useEffect } from 'react';

// function AdscashBannerWidget() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "//brightonclick.com/a/display.php?r=6903718";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     }
//   }, []);

//   return null;
// }

// export default AdscashBannerWidget;

import React, { useEffect, useRef } from 'react';

export default function AdscashBannerWidget() {
  const divRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//brightonclick.com/a/display.php?r=6903718";
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