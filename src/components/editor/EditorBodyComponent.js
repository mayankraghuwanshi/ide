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
import {
    changeEditorCodeAction,
    executedResultAction,
    startExecutingAction,
    stopExecutingAction
} from "../../actions/editorAction";
import {
    EXECUTE_CODE, EXECUTE_CODE_START,
    EXECUTED_CODE_RESULT,
    PULL_CODE_ON_CHANGE,
    PUSH_CODE_ON_CHANGE,
} from "../../socketConstants";



const EditorBodyComponent = (props) => {
    const {editor , room} = props;
    const socket = room.socket;
    const {changeEditorCodeAction,startExecutingAction , stopExecutingAction , executedResultAction} = props;

    useEffect(()=>{
        socket.on(PULL_CODE_ON_CHANGE , (data)=>{
            changeEditorCodeAction(data.code);
        })

        socket.on(EXECUTE_CODE_START , data=>{
            startExecutingAction();
        })
        socket.on(EXECUTED_CODE_RESULT , data=>{
            stopExecutingAction();
            if(data.success!==undefined || data.success!==null){
                executedResultAction({
                    stdin : data.data.stdin,
                    stdout : data.data.stdout,
                    stderr : data.data.stderr
                })
            }
        })

    } , []);

    const handleCodeOnChange = (code)=>{
        changeEditorCodeAction(code);
        let data = {
            roomId : room.roomId,
            userName : room.userName,
            code : code,
        }
        socket.emit(PUSH_CODE_ON_CHANGE , data);

    }
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
            onChange={handleCodeOnChange}
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
        changeEditorCodeAction,
        startExecutingAction,
        stopExecutingAction,
        executedResultAction
    })
(EditorBodyComponent)