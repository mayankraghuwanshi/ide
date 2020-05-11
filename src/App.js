import React from 'react';
import './App.css';
import store from './Store';
import {Provider} from "react-redux";
import Editor from './components/editor/EditorComponent'
import { HashRouter as Router , Route , Switch  } from "react-router-dom";
import LiveEditor from "./components/editor/LiveEditorComponent";

function App() {
  return (
      <Provider store={store}>
          <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                  <Route exact path="/">
                      <Editor/>
                  </Route>
                  <Route exact path="/:roomId">
                      <LiveEditor/>
                  </Route>
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
