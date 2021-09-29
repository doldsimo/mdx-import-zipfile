import React from 'react';

const Image = ({data}) => {
    return (
        <div>
            <img src={data} alt="Test" style={{maxWidth: "100%", height: "auto"}}/>
        </div>
    )
}

export default Image
