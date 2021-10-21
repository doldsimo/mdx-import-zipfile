import React from 'react'
import Backdrop from './Backdrop/Backdrop';

import { GiHamburgerMenu } from 'react-icons/gi';

import "./navigation.css";
import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = ({ showMenue, setShowMenue }) => {
    return (
        <>
            {/* For grey background if menue is open */}
            <Backdrop show={showMenue} clicked={() => setShowMenue(false)} />

            {/* Menue when it is open, with all navigation items */}
            <div className={showMenue ? "side-menue side-menue-open" : "side-menue side-menue-close"}>
                <div className="menue-icon" onClick={() => setShowMenue(false)}>
                    <GiHamburgerMenu style={{ color: 'black' }} size={32} />
                </div>

                <nav>
                    <NavigationItems setShowMenue={setShowMenue}/>
                </nav>

            </div>
        </>
    )
}

export default Navigation
