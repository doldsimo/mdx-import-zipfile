/* eslint-disable import/no-webpack-loader-syntax */
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import './app.css';

import renderWithReact from "./Components/RenderMDX/RenderMDX";
import YoutubeVideo from "./Components/Video/YoutubeVideo/YoutubeVideo";
import Reader from "./Components/Reader/Reader";
import Wrapper from './Components/Wrapper/Wrapper';
import ownRuntime from "./Components/OwnRuntime/OwnRuntime";
import RenderContentContainer from './Components/RenderContentContainer/RenderContentContainer';
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import ImportLecture from "./pages/ImportLecture";
import Layout from "./Components/Layout/Layout";
import LectureInformation from "./pages/LectureInformation";
import LectureContent from "./pages/LectureContent";


function App() {
  const [content, setContent] = useState(null);
  const [configData, setConfigData] = useState({});
  const [pageIndex, setPageIndex] = useState(0)

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <ImportLecture content={content} setContent={setContent} setConfigData={setConfigData} />
        </Route>
        <Layout>
          <Route exact path="/lecture/information">
            <LectureInformation />
          </Route>
          <Route exact path="/lecture/page/:name">
            <LectureContent />
          </Route>
          <Route exact path="/page3">
            <PageThree />
          </Route>
        </Layout>
      </Switch>
      {/* <div>
        {jsonData.map(data => RenderJsonData(data))}
      </div> */}
    </div>
  );
}



export default App;

