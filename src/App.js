import React from 'react';
import './App.css';
import store from './Store';
import {Provider} from "react-redux";
import Editor from './components/EditorComponent'
import EditorOps from "./components/EditorOpsComponent";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <EditorOps/>
              <Editor/>
          </div>
      </Provider>
  );
}

export default App;
