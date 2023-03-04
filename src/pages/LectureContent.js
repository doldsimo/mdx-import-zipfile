import React, { useEffect, useContext } from 'react'
import renderWithReact from '../Components/RenderMDX/RenderMDX';
import { useHistory } from 'react-router';
import { LectureContext } from '../context/LectureContext';

const LectureContent = () => {
    const { content, setContent, pageIndex, setPageIndex, configData } = useContext(LectureContext);
    const history = useHistory();

    useEffect(() => {
        // console.log(content);
        async function asyncRender() {
            await renderWithReact(content[pageIndex]);
        }
        asyncRender();
    }, [pageIndex]);

    const nextPage = () => {
        // console.log(configData);
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
            {/* container for rendering the lecture */}
            <div id="renderJSX"></div>
            {/* Footer navigation */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {pageIndex > 0 ? <button onClick={previousPage}>Back</button> : <div />}
                {pageIndex < configData.pages.length - 1 ? <button onClick={nextPage}>Next page</button> : pageIndex == configData.pages.length - 1 ? <button onClick={exitLecture}>End the lesson</button> : <div />}
            </div>
        </>
    )
}

export default LectureContent;
