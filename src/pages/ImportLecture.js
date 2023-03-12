import React from 'react'
import Reader from '../Components/Reader/Reader'
import './importLecture.css';

const ImportLecture = () => {
    return (
        <div className="import-lecture-container">
            <h1 className="center-import-lecture-text">Learning App</h1>
            <p className="center-import-lecture-text" style={{ marginBottom: "2.5px" }}>Import a MDX Zip lesson</p>
            <p className="center-import-lecture-text" style={{ fontSize: "small", marginTop: "2.5px", marginBottom: "" }}>(Example lesson <a href="https://github.com/doldsimo/mdx-import-zipfile/blob/master/ImportData/MathAdditionSubtraction/MathAdditionSubtraction.zip?raw=true">Download</a>)</p>

            <Reader />
        </div>
    )
}

export default ImportLecture
