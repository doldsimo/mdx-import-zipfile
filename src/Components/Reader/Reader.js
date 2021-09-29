import React from 'react';
import renderWithReact from '../RenderMDX/RenderMDX';

const Reader = ({ setContent }) => {

    const handleReadZipFile = async (e) => {

        // console.log(e.target.files[0]);


        // create a BlobReader to read with a ZipReader the zip from a Blob object
        const reader = new window.zip.ZipReader(new window.zip.BlobReader(e.target.files[0]));

        // get all entries from the zip
        const entries = await reader.getEntries();

        // console.log("entries: ", entries);
        for (let i = 0; i < entries.length; i++) {

            // if (entries.length) {
            // get first entry content as text by using a TextWriter
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
            // text contains the entry data as a String
            // console.log(text);
            
            // setContent(text);

            let data = await renderWithReact(text);
            setContent(data);
        }

        // close the ZipReader
        await reader.close();
    }


    return (
        <div>
            <input type="file" onChange={handleReadZipFile} />
        </div>
    )
}

export default Reader
