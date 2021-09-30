import React from "react";

const KeysToComponentMap = {
    h1: props => <h1 {...props} />,
    img: props => <img {...props} />,
    text: props => <p {...props} style={{ color: "blue" }} />,
    button: props => <button {...props} />,
    div: props => <div {...props}/>
};

function renderer(config) {
    if (typeof KeysToComponentMap[config.component] !== "undefined") {
        return React.createElement(
            KeysToComponentMap[config.component],
            {
                src: config.src
            },
            config.children &&
            (typeof config.children === "string"
                ? config.children
                : config.children.map(c => renderer(c)))
        );
    }
}

export default renderer;