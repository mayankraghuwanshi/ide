import React from "react";
import AceEditor from "react-ace/";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import 'ace-builds/src-noconflict/theme-monokai';
import "ace-builds/src-noconflict/theme-kuroir";
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';

import {connect} from 'react-redux';
import {changeEditorCodeAction} from "../../actions/editorAction";



const EditorBodyComponent = (props) => {
    const {editor} = props;
    const {changeEditorCodeAction} = props;

    return <div style={{margin : "2px" , width : "70%"}}>
            <AceEditor
            name = "defaultCode"
            width = "100%"
            height = "80vh"
            mode={editor.language}
            theme={editor.theme}
            fontSize = {editor.fontSize}
            showGuttet ={editor.showGutter}
            placeholder = {editor.placeholder}
            value = {editor.code}
            onChange={changeEditorCodeAction}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }}
            editorProps={{ $blockScrolling: true }}
         />
        </div>
}


const mapStateToProps = (state) => ({
    editor : state.editor
})

export default connect(mapStateToProps ,
    {
        changeEditorCodeAction
    })
(EditorBodyComponent)