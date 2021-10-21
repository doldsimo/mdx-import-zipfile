import React from 'react';
import "./lectureInformation.css";

import { useHistory } from 'react-router';

const LectureInformation = ({ configData }) => {
    const history = useHistory();


    const handleStartKlick = () => {
        console.log(configData);
        history.push("/lecture/page/" + configData.pages[0].name);
    }

    return (
        <div className="lecture-information-container">
            <h1 className="center-lecture-information-text">{configData.subject}</h1>
            <h2 className="center-lecture-information-text">{configData.topic}</h2>
            <p >Leineinheit Aufbau:</p>
            {configData.pages.map((page, index) => <p>{index + 1 + ". " + page.name}</p>)}
            <div className="center-lecture-information-text">
                <button onClick={handleStartKlick} >Lerneinheit beginnen</button>
            </div>
        </div>
    )
}

export default LectureInformation