import React, { useContext } from 'react';
import "./lectureInformation.css";

import { useHistory } from 'react-router';
import { LectureContext } from '../context/LectureContext';

const LectureInformation = () => {
    const { configData } = useContext(LectureContext);
    const history = useHistory();


    const handleStartKlick = () => {
        history.push("/lecture/page/" + configData.pages[0].name);
    }

    return (
        <div className="lecture-information-container">
            <h1 className="center-lecture-information-text">{configData.subject}</h1>
            <h2 className="center-lecture-information-text">{configData.topic}</h2>
            <p >Leineinheit Aufbau:</p>
            {configData.pages.map((page, index) => <p key={index}>{index + 1 + ". " + page.name}</p>)}
            <div className="center-lecture-information-text">
                <button onClick={handleStartKlick} >Lerneinheit beginnen</button>
            </div>
        </div>
    )
}

export default LectureInformation
