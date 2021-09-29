import React from 'react';
import { transform, registerPlugin } from '@babel/standalone';
import tojsx from '@babel/plugin-transform-react-jsx';
import proposal from '@babel/plugin-proposal-object-rest-spread';
import mdx from '@mdx-js/mdx';
import { MDXProvider, mdx as createElement } from '@mdx-js/react';
import Wrapper from '../Wrapper/Wrapper';


import Quiz from 'react-quiz-component';
import YoutubeVideo from '../Video/YoutubeVideo/YoutubeVideo';
import Image from '../Image/Image';
import ReactDOM from 'react-dom';

const transformJSX = code =>
    transform(code, {
        plugins: [
            'reactToJSX',
            'plugin-proposal-object-rest-spread'
        ]
    }).code


const registerBabelPlugins = () => {
    registerPlugin("reactToJSX", tojsx);
    registerPlugin("plugin-proposal-object-rest-spread", proposal);
}


const renderWithReact = async (mdxCode) => {
    const jsx = await mdx(mdxCode, { skipExport: true });
    // Because of buble/standalone plugins must registered not in .bablerc
    registerBabelPlugins();
    const code = transformJSX(jsx);
    const scope = { mdx: createElement }

    // console.log(jsx);
    // console.log(code);
    // console.log(scope);

    const fn = new Function(
        'React',
        ...Object.keys(scope),
        `${code}; return React.createElement(MDXContent)`
    )

    const element = fn(React, ...Object.values(scope))
    const components = {
        h1: props => <h1 style={{ color: "blue" }} {...props}/>,
        Demo: () => <h1>This is a demo component</h1>,
        DemoTwo: () => <h1 style={{color: "red"}}>This is a demo component Two</h1>,
        TestComponent: ({ test }) => <p>TestComponent {test}</p>,
        Image: ({ data }) => <Image data={data} />,
        YoutubeVideo: ({ url }) => <YoutubeVideo url={url} />,
        Quiz: ({ quiz }) => <Quiz quiz={quiz} />,
        wrapper: Wrapper,
    }



    const elementWithProvider = React.createElement(MDXProvider, { components }, element)
    // const elementWithProvider = ({ components }) => <MDXProvider components={components}>{element}</MDXProvider>;

    return ReactDOM.render(elementWithProvider, document.getElementById('renderJSX'));
}

export default renderWithReact;



