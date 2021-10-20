import React, { useState } from 'react'
import { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navigation from './Navigation/Navigation'

const Layout = ({ children, configData }) => {
    const [showMenue, setShowMenue] = useState(false);

    useEffect(() => {
        console.log(configData);
    }, [])

    return (
        <div>
            {/* Burger menue Icon */}
            <div>
                <GiHamburgerMenu style={{ color: 'black', cursor: "pointer" }} size={32} onClick={() => setShowMenue(true)} />
            </div>
            <Navigation configData={configData} showMenue={showMenue} setShowMenue={setShowMenue} />
            <main>{children}</main>
        </div>
    )
}

export default Layout
