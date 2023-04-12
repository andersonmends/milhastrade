import React, { useEffect } from 'react';

export default function AdsterraNativeBannerWidget() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//pl19040486.highrevenuegate.com/b1ea4d63b197a15313cfd34948dd5e48/invoke.js';
        script.async = true;
        script.dataset.at = 'true'; // Desabilitar a exibição automática do widget

        const container = document.getElementById('container-b1ea4d63b197a15313cfd34948dd5e48');
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, []);

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="container-b1ea4d63b197a15313cfd34948dd5e48" style={{ display: "flex", width: '350px', justifyContent: 'center' }} />
    </div>;
}
