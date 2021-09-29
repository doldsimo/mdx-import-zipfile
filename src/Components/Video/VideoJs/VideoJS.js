import React from 'react';
import test from '../../../assets/videos/test.mp4';
import "./videojs.css";

const VideoJS = ({data}) => {
    // const videoSrc = test;

    return (
        <div>
            <video src={data} controls>
            </video>
        </div>
    )
}

export default VideoJS;
