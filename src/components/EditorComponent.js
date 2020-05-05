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
import {editorCodeOnChangeAction} from "../actions/editorModeAction";


const EditorComponent = (props) => {
    const {editorOption , editorMode} = props;
    const {editorCodeOnChangeAction} = props;

    return <div style={{margin : "2px" , width : "70%"}}>
            <AceEditor
            name = "defaultCode"
            width = "100%"
            height = "80vh"
            mode={editorMode.name}
            theme={editorOption.theme}
            fontSize = {editorOption.fontSize}
            showGuttet ={editorOption.shorthand}
            placeholder = {editorOption.placeholder}
            value = {editorMode.code}
            onChange={editorCodeOnChangeAction}
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
    editorOption : state.editorOption,
    editorMode : state.editorMode
})

export default connect(mapStateToProps , {editorCodeOnChangeAction})(EditorComponent)