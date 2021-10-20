import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './navigationItems.css';

const NavigationItems = ({ configData, setShowMenue }) => {
    return (
        <ul className="navigation-items" onClick={() => setShowMenue(false)}>
            {configData.pages.map((page, index) => <NavigationItem exact link={"/lecture/page/" + page.name}>{index + 1 + ". " + page.name}</NavigationItem>)}
            <NavigationItem link="/" exact >Lerneinheit beenden</NavigationItem>
        </ul>
    )
}

export default NavigationItems
