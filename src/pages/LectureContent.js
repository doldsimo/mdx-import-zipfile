import React, { useEffect } from 'react'
import renderWithReact from '../Components/RenderMDX/RenderMDX';
import { useHistory } from 'react-router';
import { StepContent } from '@material-ui/core';

const LectureContent = ({ content, setContent, pageIndex, setPageIndex, configData }) => {
    const history = useHistory();

    useEffect(() => {
        console.log(content);
        async function asyncRender() {
            let data = await renderWithReact(content[pageIndex]);
        }
        asyncRender();
    }, [pageIndex]);

    const nextPage = () => {
        console.log(configData);
        history.push("/lecture/page/" + configData.pages[pageIndex + 1].name);
        setPageIndex(pageIndex + 1);
    }

    const previousPage = () => {
        history.push("/lecture/page/" + configData.pages[pageIndex - 1].name);
        setPageIndex(pageIndex - 1);
    }

    const exitLecture = () => {
        history.push("/");
        setPageIndex(0);
        setContent(null);
    }

    return (
        <>
            <div id="renderJSX"></div>
            {/* Footer navigation */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {pageIndex > 0 ? <button onClick={previousPage}>Zurück</button> : <div />}
                {pageIndex < configData.pages.length - 1 ? <button onClick={nextPage}>Nächste Seite</button> : pageIndex == configData.pages.length - 1 ? <button onClick={exitLecture}>Lerneinheit beenden</button> : <div />}
            </div>
        </>
    )
}

export default LectureContent;
