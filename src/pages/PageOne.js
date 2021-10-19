import React from 'react'
import RenderContentContainer from '../Components/RenderContentContainer/RenderContentContainer'

const PageOne = ({content}) => {
    return (
        <div>
            PageOne
            <RenderContentContainer content={content} />
        </div>
    )
}

export default PageOne
