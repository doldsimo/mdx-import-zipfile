import React from 'react';
import renderWithReact from '../RenderMDX/RenderMDX';
import { useHistory } from 'react-router';

const Reader = ({ setContent, setConfigData }) => {
    const history = useHistory();

    const handleReadZipFile = async (e) => {
        // console.log(e.target.files[0]);


        let pages = [];
        let content = [];

        // create a BlobReader to read with a ZipReader the zip from a Blob object
        const reader = new window.zip.ZipReader(new window.zip.BlobReader(e.target.files[0]));

        // get all entries from the zip
        const entries = await reader.getEntries();

        console.log("entries: ", entries);
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
                console.log(jsonText);
                setConfigData(jsonText);
                pages = jsonText.pages;
            }

            // debugger;
            if (entries[i].filename.startsWith("pages/")) {
                console.log(entries[i].filename);
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
                console.log(entries[i].filename);
                console.log(text);
                content.push(text);
            }
        }

        // close the ZipReader
        await reader.close();

        console.log(pages);
        console.log("Content: ", content);
        // Push to new page must be before render, so that targeted container exists
        history.push("/lecture/information");
        // let data = await renderWithReact(content[0], setContent);

    }


    return (
        <div className="center-import-lecture-text">
            <input type="file" onChange={handleReadZipFile} />
        </div>
    )
}

export default Reader
