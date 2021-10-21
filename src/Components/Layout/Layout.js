import React, { useState } from 'react'
import { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navigation from './Navigation/Navigation'

const Layout = ({ children }) => {
    const [showMenue, setShowMenue] = useState(false);


    return (
        <div>
            {/* Burger menue Icon */}
            <div>
                <GiHamburgerMenu style={{ color: 'black', cursor: "pointer" }} size={32} onClick={() => setShowMenue(true)} />
            </div>
            <Navigation showMenue={showMenue} setShowMenue={setShowMenue} />
            <main>{children}</main>
        </div>
    )
}

export default Layout
