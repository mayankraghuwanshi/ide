import React from 'react';
import './App.css';
import store from './Store';
import {Provider} from "react-redux";
import Editor from './components/EditorComponent'
import EditorOps from "./components/EditorOpsComponent";
import StdIO from './components/StdIOComponent';

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <EditorOps/>
              <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
                  <Editor/>
                  <StdIO/>
              </div>

          </div>
      </Provider>
  );
}

export default App;
