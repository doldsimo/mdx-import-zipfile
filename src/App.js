/* eslint-disable import/no-webpack-loader-syntax */
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";


import renderWithReact from "./Components/RenderMDX/RenderMDX";
import YoutubeVideo from "./Components/Video/YoutubeVideo/YoutubeVideo";
import Reader from "./Components/Reader/Reader";
import Wrapper from './Components/Wrapper/Wrapper';
// import Quiz from 'react-quiz-component';

import { mdx } from './exampleMDX';

import RenderJsonData from './Components/RenderJsonData/RenderJsonData';
import { RemoteComponent } from "./Components/RemoteComponent/RemoteComponent";

import RenderContentContainer from "./Components/RenderContentContainer/RenderContentContainer";


const url = "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/Time.js"; // prettier-ignore


function App() {
  const [content, setContent] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  const components = {
    h1: props => <h1 style={{ color: "tomato" }} {...props} />,
    Demo: () => <h1>This is a demo component</h1>,
    DemoTwo: () => <h1 style={{ color: "red" }}>This is a demo component Two</h1>,
    TestComponent: ({ test }) => <p>TestComponent {test}</p>,
    YoutubeVideo: ({ url }) => <YoutubeVideo url={url} />,
    // Quiz: ({ quiz }) => <Quiz quiz={quiz} />,
    wrapper: Wrapper,
  };

  // useEffect(() => {
  //   console.log(jailed);
  //   new jailed.DynamicPlugin("console.log");
  // }, [])



  return (
    <div>
      <h1>Lern App</h1>
      <p>Importiere eine Lerneinheit</p>
      {/* <RemoteComponent url={url}/> */}
      <Reader setContent={setContent} setJsonData={setJsonData} />
      <RenderContentContainer content={content} />
      {/* <div>
        {jsonData.map(data => RenderJsonData(data))}
      </div> */}
      {/* <MDXProvider> */}
      {/* <MDX components={components}>{content}</MDX> */}
      {/* </MDXProvider> */}
    </div>
  );
}



export default App;

