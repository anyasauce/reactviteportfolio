import React, { useEffect } from 'react';

const GoogleAds = () => {
    useEffect(() => {
        // Only load ads in production
        if (process.env.NODE_ENV === 'production') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (error) {
                console.error('AdSense error:', error);
            }
        }
    }, []);

    return (
        <div className="google-ads-container my-4">
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-5613688387404299"
                data-ad-slot="8111442816"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default GoogleAds;