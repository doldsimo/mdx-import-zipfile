import React from "react";

import './backdrop.css';

// Grey Background if menue is open
const Backdrop = ({show, clicked}) => (
    show ? <div className="backdrop" onClick={clicked}></div> : null
);

export default Backdrop;
