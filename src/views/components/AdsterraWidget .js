import { useEffect, useRef } from 'react'

export function Banner468x60() {
    const banner = useRef(null)

    const atOptions = {
        key: '34d98e2b3a9023c5ea40b57659e04142',
        format: 'iframe',
        height: 60,
        width: 468,
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

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div ref={banner} className='mt-2 mb-2' style={{ width: "350px", display: "flex", justifyContent: 'center' }}  ></div>
    </div >;
}

export function Banner300x250() {
    const banner2 = useRef(null)

    const atOptions = {
        key: '4ad6eac52894fc6552bf0ca1803d009d',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {},
    }
    useEffect(() => {
        if (!banner2.current.firstChild) {
            const conf = document.createElement('script')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

            if (banner2.current) {
                banner2.current.append(conf)
                banner2.current.append(script)
            }
        }
    }, [])

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div ref={banner2} className='mt-2 mb-2' style={{ width: "380px", display: "flex", justifyContent: 'center' }}  ></div>
    </div >;
}


export function NativeBanner() {
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
        <div id="container-b1ea4d63b197a15313cfd34948dd5e48" style={{ display: "flex", width: '', justifyContent: 'center' }} />
    </div>;
}

export function SocialBar() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//pl19234996.highrevenuegate.com/f3/02/f8/f302f85c00d93700799ed9d532870679.js';
        script.async = true;
        script.dataset.at = 'true'; // Desabilitar a exibição automática do widget

        const container = document.getElementById('container-f302f85c00d93700799ed9d532870679');
        container.appendChild(script);

        return () => {
            container.removeChild(script);
        };
    }, []);

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="container-f302f85c00d93700799ed9d532870679" style={{ display: "flex", width: '', justifyContent: 'center' }} />
    </div>;
}



