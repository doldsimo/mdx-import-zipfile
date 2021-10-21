/* eslint-disable import/no-webpack-loader-syntax */
import { Switch, Route } from 'react-router-dom';
import './app.css';

import ImportLecture from "./pages/ImportLecture";
import Layout from "./Components/Layout/Layout";
import LectureInformation from "./pages/LectureInformation";
import LectureContent from "./pages/LectureContent";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <ImportLecture />
        </Route>
        <Layout>
          <Route exact path="/lecture/information">
            <LectureInformation />
          </Route>
          <Route exact path="/lecture/page/:name">
            <LectureContent />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;

