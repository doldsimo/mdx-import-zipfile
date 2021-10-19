import React from 'react'
import Reader from '../Components/Reader/Reader'
import RenderContentContainer from '../Components/RenderContentContainer/RenderContentContainer';
import './importLecture.css';

const ImportLecture = ({ content, setContent, setJsonData, history }) => {
    return (
        <div className="import-lecture-container">
            <h1 className="center-import-lecture-text">Lern App</h1>
            <p className="center-import-lecture-text">Importiere eine Lerneinheit</p>
            {/* <RemoteComponent url={url}/> */}
            <Reader setContent={setContent} setJsonData={setJsonData} />
        </div>
    )
}

export default ImportLecture
