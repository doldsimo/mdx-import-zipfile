import React from 'react';
import { createContext, useState } from 'react';

export const LectureContext = createContext();


export const LectureProvider = (props) => {
    const [content, setContent] = useState(null);
    const [configData, setConfigData] = useState({});
    const [pageIndex, setPageIndex] = useState(0)

    return (
        <LectureContext.Provider value={{ content, setContent, configData, setConfigData, pageIndex, setPageIndex }}>
            {props.children}
        </LectureContext.Provider>
    );
}