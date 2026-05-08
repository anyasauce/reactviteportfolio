import React from 'react';
import GoogleAds from './GoogleAds';

const SidebarAd = () => {
    return (
        <div className="sidebar-ad mt-4">
            <div className="card bg-dark text-white">
                <div className="card-header bg-primary">
                    <small>Sponsor</small>
                </div>
                <div className="card-body p-0">
                    <GoogleAds />
                </div>
            </div>
        </div>
    );
};

export default SidebarAd;