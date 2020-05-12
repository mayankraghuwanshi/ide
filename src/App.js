import React from 'react';
import './App.css';
import store from './Store';
import {Provider} from "react-redux";
import Editor from './components/editor/EditorComponent'
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";


function App() {
  return (
      <Provider store={store}>
          <Router basename={""}>
              <Switch>
                  <Route exact path="/">
                      <Redirect to = {`/${Date.now()}`}/>
                  </Route>
                  <Route exact path="/:roomId">
                      <Editor/>
                  </Route>
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
