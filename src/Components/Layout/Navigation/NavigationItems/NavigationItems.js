import React, { useContext } from 'react';
import { LectureContext } from '../../../../context/LectureContext';
import NavigationItem from './NavigationItem/NavigationItem';
import './navigationItems.css';

const NavigationItems = ({ setShowMenue }) => {
    const { configData } = useContext(LectureContext);
    return (
        <ul className="navigation-items" onClick={() => setShowMenue(false)}>
            {configData.pages.map((page, index) => <NavigationItem exact link={"/lecture/page/" + page.name}>{index + 1 + ". " + page.name}</NavigationItem>)}
            <NavigationItem link="/" exact exit>Lerneinheit beenden</NavigationItem>
        </ul>
    )
}

export default NavigationItems;
