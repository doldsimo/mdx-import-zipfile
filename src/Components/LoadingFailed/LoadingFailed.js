import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

const LoadingFailed = ({name}) => {
    return (
        <div style={{display: "flex", flexDirection: "row", backgroundColor: "#E9E9E9", padding: "0.2rem", margin: "0.2rem"}}><i>{name} can not be loaded. </i><AiOutlineClose size={20} color="red"/> </div>
    )
}

export default LoadingFailed
