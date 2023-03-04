import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import { LectureContext } from '../../context/LectureContext';

const Reader = () => {
    const { setContent, setConfigData } = useContext(LectureContext);
    const history = useHistory();

    const handleReadZipFile = async (e) => {
        let pages = [];
        let content = [];

        // create a BlobReader to read with a ZipReader the zip from a Blob object
        const reader = new window.zip.ZipReader(new window.zip.BlobReader(e.target.files[0]));

        // get all entries from the zip
        const entries = await reader.getEntries();

        for (let i = 0; i < entries.length; i++) {
            // Read the config of the lecture
            if (entries[i].filename === "config.json") {
                const text = await entries[i].getData(
                    // writer
                    new window.zip.TextWriter(),
                    // options
                    {
                        onprogress: (index, max) => {
                            // onprogress callback
                        }
                    }
                );

                let jsonText = JSON.parse(text);
                setConfigData(jsonText);
                pages = jsonText.pages;
            }

            // Addes all content pages to content array
            if (entries[i].filename.startsWith("pages/")) {
                const text = await entries[i].getData(
                    // writer
                    new window.zip.TextWriter(),
                    // options
                    {
                        onprogress: (index, max) => {
                            // onprogress callback
                        }
                    }
                );
                content.push(text);
            }
        }
        // close the ZipReader
        await reader.close();
        // To set content in App-Component, so the app know about the content
        setContent(content);
        // Push to new page must be before render, so that targeted container exists
        history.push("/lecture/information");
    }

    return (
        <div className="center-import-lecture-text">
            <input type="file" name="Upload Exmaple lecture" onChange={handleReadZipFile} />
        </div>
    )
}

export default Reader
