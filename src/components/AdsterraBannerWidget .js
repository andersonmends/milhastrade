import { useEffect, useRef } from 'react'
export default function AdsterraBannerWidget() {
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
    <div ref={banner} className='mt-2' style={{ width: "380px", display: "flex", justifyContent: 'center'}}  ></div>
    </div >;
}

