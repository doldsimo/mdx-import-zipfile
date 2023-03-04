import React from 'react';
import { transform, registerPlugin } from '@babel/standalone';
import tojsx from '@babel/plugin-transform-react-jsx';
import proposal from '@babel/plugin-proposal-object-rest-spread';
import mdx from '@mdx-js/mdx';
import { MDXProvider, mdx as createElement } from '@mdx-js/react';
import Wrapper from '../Wrapper/Wrapper';
import ReactDOM from 'react-dom';


import YoutubeVideo from '../Video/YoutubeVideo/YoutubeVideo';
import { RemoteComponent } from '../RemoteComponent/RemoteComponent';
import { urltest, urlImage, urlMp4Video, urlQuizComponent, urlYoutubeVideo } from '../../RemoteComponentsURL';
import Spinner from '../Spinner/Spinner';
import LoadingFailed from '../LoadingFailed/LoadingFailed';

const transformJSX = code =>
    transform(code, {
        plugins: [
            'reactToJSX',
            'plugin-proposal-object-rest-spread',
            // 'plugin-transform-eval'
        ]
    }).code


const registerBabelPlugins = () => {
    registerPlugin("reactToJSX", tojsx);
    registerPlugin("plugin-proposal-object-rest-spread", proposal);
}


const renderWithReact = async (mdxCode, setContent) => {

    const jsx = await mdx(mdxCode, { skipExport: true });
    // Because of buble/standalone plugins must registered not in .bablerc
    registerBabelPlugins();
    const code = transformJSX(jsx);
    const scope = { mdx: createElement }

    const fn = new Function(
        'React',
        ...Object.keys(scope),
        `${code}; return React.createElement(MDXContent)`
    )

    const element = fn(React, ...Object.values(scope))
    const components = {
        h1: props => <h1 {...props} />,
        h2: props => <h2 {...props} />,
        h3: props => <h3 {...props} />,
        h4: props => <h4 {...props} />,
        h5: props => <h5 {...props} />,
        h6: props => <h6 {...props} />,
        p: props => <p {...props} />,
        Mp4Video: props => <RemoteComponent url={urlMp4Video} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="MP4 Video" /> : <Component {...props} />} />,
        Image: props => <RemoteComponent url={urlImage} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="Bild" /> : <Component {...props} />} />,
        YoutubeVideo: props => <YoutubeVideo {...props} />, // Youtube video in combination with RemoteComponent gives CORS errors, therefore no RemoteComponent is used for Youtube videos
        Quiz: props => <RemoteComponent url={urlQuizComponent} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="Quiz" /> : <Component {...props} />} />,
        CustomComponent: props => <RemoteComponent url={props.url} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="Benutzerdefiniertekomponente" /> : <Component {...props} />} />, // Any component for which you give the URL so that you can specify which component you want to use from the "store", the type is set as a class
        wrapper: Wrapper,
    }



    const elementWithProvider = React.createElement(MDXProvider, { components }, element);
    // const elementWithProvider = ({ components }) => <MDXProvider components={components}>{element}</MDXProvider>;
    return ReactDOM.render(elementWithProvider, document.getElementById('renderJSX'));
}

export default renderWithReact;