import React from 'react'
import Reader from '../Components/Reader/Reader'
import './importLecture.css';

const ImportLecture = () => {
    return (
        <div className="import-lecture-container">
            <h1 className="center-import-lecture-text">Lern App</h1>
            <p className="center-import-lecture-text" style={{ marginBottom: "2.5px" }}>Importiere eine MDX Zip Lerneinheit</p>
            <p className="center-import-lecture-text" style={{ fontSize: "small", marginTop: "2.5px", marginBottom: "" }}>(Beispiel Lerneinheit <a href="https://github.com//doldsimo/mdx-import-zipfile/blob/dev/ImportData/Mathematik%20Addition%20Subtraktion/Beispiellektion_Mathematik.zip?raw=true">Downloaden</a>)</p>

            <Reader />
        </div>
    )
}

export default ImportLecture
