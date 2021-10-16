import React from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = () => {
    return (
        <div>
            <ClipLoader color="black" loading={true} css={override} size={50} />
        </div>
    )
}

export default Spinner
