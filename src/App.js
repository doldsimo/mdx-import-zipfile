/* eslint-disable import/no-webpack-loader-syntax */
import { MDXProvider } from "@mdx-js/react";
import { useState } from "react";


import renderWithReact from "./Components/RenderMDX/RenderMDX";
import YoutubeVideo from "./Components/Video/YoutubeVideo/YoutubeVideo";
import Reader from "./Components/Reader/Reader";
import Image from './Components/Image/Image';
import Wrapper from './Components/Wrapper/Wrapper';
import Quiz from 'react-quiz-component';

import { mdx } from './exampleMDX';

import RenderJsonData from './Components/RenderJsonData/RenderJsonData';

function App() {
  const [content, setContent] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  const components = {
    h1: props => <h1 style={{ color: "tomato" }} {...props} />,
    Demo: () => <h1>This is a demo component</h1>,
    DemoTwo: () => <h1 style={{color: "red"}}>This is a demo component Two</h1>,
    TestComponent: ({ test }) => <p>TestComponent {test}</p>,
    Image: ({ data }) => <Image data={data} />,
    YoutubeVideo: ({ url }) => <YoutubeVideo url={url} />,
    Quiz: ({ quiz }) => <Quiz quiz={quiz} />,
    wrapper: Wrapper,
  };



  return (
    <div>
      <h1>Lern App</h1>
      <p>Importiere eine Lerneinheit</p>
      <Reader setContent={setContent} setJsonData={setJsonData} />
      <div id="renderJSX"></div>
      <div>
        {jsonData.map(data => RenderJsonData(data))}
      </div>
      {/* <MDXProvider> */}
      {/* <MDX components={components}>{content}</MDX> */}
      {/* </MDXProvider> */}
    </div>
  );
}



export default App;

