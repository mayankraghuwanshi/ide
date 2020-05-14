import React, {useEffect} from "react";
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
import {PUSH_CODE_ON_CHANGE, PUSH_LANGUAGE_ON_CHANGE} from "../../socketConstants";



const EditorBodyComponent = (props) => {
    const {editor , room} = props;
    const socket = room.socket;
    const {changeEditorCodeAction} = props;
    useEffect(()=>{
        socket.emit(PUSH_CODE_ON_CHANGE , {
            roomId : room.roomId,
            userName : room.userName,
            code : editor.code
        })
        socket.emit(PUSH_LANGUAGE_ON_CHANGE , {
            roomId : room.roomId,
            userName : room.userName,
            language : editor.language
        })

    },[editor.code , editor.language])

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
    editor : state.editor,
    room : state.room
})

export default connect(mapStateToProps ,
    {
        changeEditorCodeAction
    })
(EditorBodyComponent)