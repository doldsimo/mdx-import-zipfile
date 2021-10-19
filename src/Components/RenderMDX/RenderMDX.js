import React, { Suspense } from 'react';
import { transform, registerPlugin } from '@babel/standalone';
import tojsx from '@babel/plugin-transform-react-jsx';
import proposal from '@babel/plugin-proposal-object-rest-spread';
import transformeval from 'babel-plugin-transform-eval';
import mdx from '@mdx-js/mdx';
import { MDXProvider, mdx as createElement } from '@mdx-js/react';
import Wrapper from '../Wrapper/Wrapper';
import ReactDOM from 'react-dom';

// import jailed from 'jailed';

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
    // registerPlugin("plugin-transform-eval", transformeval);
}


const renderWithReact = async (mdxCode, setContent) => {

    // var plugin = new window.jailed.DynamicPlugin('console.log("Hacked!!!"); alert("Alert Message"); setTimeout(() => {console.log("Waited For 10 Seconds")}, 10000)', api);
    // console.log(plugin);

    const jsx = await mdx(mdxCode, { skipExport: true });
    // Because of buble/standalone plugins must registered not in .bablerc
    registerBabelPlugins();
    const code = transformJSX(jsx);
    const scope = { mdx: createElement }
    // var plugin = new window.jailed.DynamicPlugin(code);

    // console.log(jsx);
    // console.log(code);
    // console.log(typeof(code));


    const fn = new Function(
        'React',
        ...Object.keys(scope),
        `${code}; return React.createElement(MDXContent)`
    )

    const element = fn(React, ...Object.values(scope))
    const components = {
        h1: props => <h1 style={{ color: "blue" }} {...props} />,
        Mp4Video: props => <RemoteComponent url={urlMp4Video} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="MP4 Video" /> : <Component {...props} />} />,
        Image: props => <RemoteComponent url={urlImage} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="Bild" /> : <Component {...props} />} />,
        YoutubeVideo: props => <YoutubeVideo {...props} />, // Youtube Video in kombination mit RemoteComponent gibt CORS Fehler aus, deswegen wird bei Youtube Videos keine RemoteComponent verwendet
        Quiz: props => <RemoteComponent url={urlQuizComponent} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="Quiz" /> : <Component {...props} />} />,
        CustomComponent: props => <RemoteComponent url={props.url} fallback={<Spinner />} render={({ err, Component }) => err ? <LoadingFailed name="Benutzerdefiniertekomponente" /> : <Component {...props} />} />, // Beliebige Komponente bei welcher man die URL mitgiebt, sodass man angeben kann welche Komponente man aus dem "Store" benutzen möchte, der type wird als Klasse gesetzt
        wrapper: Wrapper,
    }



    const elementWithProvider = React.createElement(MDXProvider, { components }, element);
    // const elementWithProvider = ({ components }) => <MDXProvider components={components}>{element}</MDXProvider>;
    return ReactDOM.render(elementWithProvider, document.getElementById('renderJSX'));
}

export default renderWithReact;