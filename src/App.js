import React from 'react';
import './App.css';
import store from './Store';
import {Provider} from "react-redux";
import EditorOps from "./components/EditorOpsComponent";
import EditorMainComponent from './components/EditorMainComponent'

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <EditorOps/>
              <EditorMainComponent/>
          </div>
      </Provider>
  );
}

export default App;
