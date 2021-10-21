import React from 'react'
import Reader from '../Components/Reader/Reader'
import './importLecture.css';

const ImportLecture = () => {
    return (
        <div className="import-lecture-container">
            <h1 className="center-import-lecture-text">Lern App</h1>
            <p className="center-import-lecture-text">Importiere eine Lerneinheit</p>
            <Reader />
        </div>
    )
}

export default ImportLecture
