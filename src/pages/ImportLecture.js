import React from 'react'
import Reader from '../Components/Reader/Reader'
import RenderContentContainer from '../Components/RenderContentContainer/RenderContentContainer';

const ImportLecture = ({content, setContent, setJsonData, history}) => {
    return (
        <div>
            <h1>Lern App</h1>
            <p>Importiere eine Lerneinheit</p>
            {/* <RemoteComponent url={url}/> */}
            <Reader setContent={setContent} setJsonData={setJsonData} />
        </div>
    )
}

export default ImportLecture
