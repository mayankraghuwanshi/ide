import React from "react";
import {Input} from "antd";
import {connect} from 'react-redux';
import {changeStdinAction} from "../../actions/editorAction";



const {TextArea} = Input;
const style = {
    display : "flex",
    flexDirection : "column",
    width : "30%"
}


const StdIO = (props) => {
    const {editor} = props;
    const {changeStdinAction} = props;
    const output = editor.stderr.length>0 ? editor.stderr : editor.stdout;
    const error = editor.stderr.length>0 ? true : false;
    const outputBoxStyle = {
        color : error?"red":"black",
    }


    return <div style={style}>
        <label for = "stdin"><b>Input</b></label>
        <TextArea id="stdin" rows={9} value={editor.stdin} onChange={(e)=>changeStdinAction(e.target.value)} />
        <label for = "stdout"><b>Output</b></label>
        <TextArea id="stdout" rows={9} value={output} style={outputBoxStyle} disabled={true}/>
    </div>
}

const mapStateToProps = (state)=>({
    editor : state.editor
})

export default connect(mapStateToProps,
{
    changeStdinAction
}
)(StdIO);