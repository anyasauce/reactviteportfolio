import React, { useEffect } from 'react';

const AdsenseScript = () => {
    useEffect(() => {
        // Only load in production
        if (process.env.NODE_ENV === 'production') {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5613688387404299';
            script.async = true;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);

            return () => {
                // Cleanup if needed
                document.head.removeChild(script);
            };
        }
    }, []);

    return null;
};

export default AdsenseScript;