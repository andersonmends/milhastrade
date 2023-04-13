import React, { useEffect } from 'react';

function AdscashBannerWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//brightonclick.com/a/display.php?r=6903718";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return null;
}

export default AdscashBannerWidget;