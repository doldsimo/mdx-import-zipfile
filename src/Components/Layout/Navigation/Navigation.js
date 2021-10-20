import React from 'react'
import { Link } from 'react-router-dom';
import Backdrop from './Backdrop/Backdrop';

import { GiHamburgerMenu } from 'react-icons/gi';

import "./navigation.css";
import NavigationItems from './NavigationItems/NavigationItems';

const Navigation = ({ configData, showMenue, setShowMenue }) => {
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
                    <NavigationItems configData={configData} setShowMenue={setShowMenue}/>
                </nav>

            </div>

            {/* <div className="navigation-container">
                <div>
                    <Link to="/">Lerneinheit beenden</Link>
                </div>
                <div>
                    {configData.pages.map((page, index) => <><Link to={"/lecture/page/" + page.name}>{index + 1 + ". " + page.name}</Link> </>)}
                </div>

            </div> */}
        </>
    )
}

export default Navigation
