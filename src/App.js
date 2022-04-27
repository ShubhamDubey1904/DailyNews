import './App.css';
import Navbar from './component/Navbar';

import React,{useState} from 'react'
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = ()=> {
  const apiKey="58690090937744279be1ecc4bf60e1e2"
  const [progress, setProgress] = useState(0)
    return (
      <div>
         <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"> <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country = "in" category="general"/> </Route>
          <Route exact path="/business"> <News setProgress={setProgress} apiKey={apiKey}  key="business"pageSize={6} country = "in" category="business"/> </Route>
          <Route exact path="/entertainment"> <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country = "in" category="entertainment"/> </Route>
          <Route exact path="/general"> <News setProgress={setProgress} apiKey={apiKey}  key="general"pageSize={6} country = "in" category="general"/> </Route>
          <Route exact path="/health"> <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country = "in" category="health"/> </Route>
          <Route exact path="/science"> <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country = "in" category="science"/> </Route>
          <Route exact path="/sports"> <News setProgress={setProgress} apiKey={apiKey}  key="sports"  pageSize={6} country = "in" category="sports"/> </Route>
          <Route exact path="/technology"> <News setProgress={setProgress} apiKey={apiKey}  key="technology"pageSize={6} country = "in" category="technology"/> </Route>
        </Switch>
        </Router>
      </div>
    )
  }

export default App

