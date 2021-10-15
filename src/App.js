/* eslint-disable import/no-webpack-loader-syntax */
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";

import renderWithReact from "./Components/RenderMDX/RenderMDX";
import YoutubeVideo from "./Components/Video/YoutubeVideo/YoutubeVideo";
import Reader from "./Components/Reader/Reader";
import Wrapper from './Components/Wrapper/Wrapper';
import ownRuntime from "./Components/OwnRuntime/OwnRuntime";
import RenderContentContainer from './Components/RenderContentContainer/RenderContentContainer';


function App() {
  const [content, setContent] = useState(null);
  const [jsonData, setJsonData] = useState([]);

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
    </div>
  );
}



export default App;

