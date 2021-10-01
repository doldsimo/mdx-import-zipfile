import React, { Suspense } from 'react';
import { transform, registerPlugin } from '@babel/standalone';
import tojsx from '@babel/plugin-transform-react-jsx';
import proposal from '@babel/plugin-proposal-object-rest-spread';
import mdx from '@mdx-js/mdx';
import { MDXProvider, mdx as createElement } from '@mdx-js/react';
import Wrapper from '../Wrapper/Wrapper';
import ReactDOM from 'react-dom';

import YoutubeVideo from '../Video/YoutubeVideo/YoutubeVideo';
import { RemoteComponent } from '../RemoteComponent/RemoteComponent';
import {urltest, urlImage, urlMp4Video, urlQuizComponent, urlYoutubeVideo} from '../../RemoteComponentsURL';

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
        h1: props => <h1 style={{color: "blue"}} {...props}/>,
        Demo: props => <RemoteComponent url={urltest} {...props}/>,
        DemoTwo: () => <h1 style={{ color: "red" }}>This is a demo component Two</h1>,
        TestComponent: ({ test }) => <p>TestComponent {test}</p>,
        Mp4Video: props => <RemoteComponent url={urlMp4Video} {...props}/>, 
        Image: props => <RemoteComponent url={urlImage} {...props}/>,
        YoutubeVideo: props => <YoutubeVideo {...props}/>, // Youtube Video in kombination mit RemoteComponent gibt CORS Fehler aus, deswegen wird bei Youtube Videos keine RemoteComponent verwendet
        Quiz: props => <RemoteComponent url={urlQuizComponent} {...props}/>,
        CustomComponent: ({url, type}) => <RemoteComponent url={url} type={type}/>, // Beliebige Komponente bei welcher man die URL mitgiebt, sodass man angeben kann welche Komponente man aus dem "Store" benutzen möchte, der type wird als Klasse gesetzt
        wrapper: Wrapper,
    } 



    const elementWithProvider = React.createElement(MDXProvider, { components }, element)
    // const elementWithProvider = ({ components }) => <MDXProvider components={components}>{element}</MDXProvider>;

    return ReactDOM.render(elementWithProvider, document.getElementById('renderJSX'));
}

export default renderWithReact;