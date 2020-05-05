import React from "react";
import {Input} from "antd";
import {connect} from 'react-redux';



const {TextArea} = Input;
const style = {
    display : "flex",
    flexDirection : "column",
    width : "30%"
}


const StdIO = (props) => {
    const {editorMode} = props;
    const output = editorMode.stderr.length>0 ? editorMode.stderr : editorMode.stdout;
    const error = editorMode.stderr.length>0 ? true : false;
    const outputBoxStyle = {
        color : error?"red":"black",
    }

    return <div style={style}>
        <label for = "stdin"><b>Input</b></label>
        <TextArea id="stdin" rows={9} value={editorMode.stdin} />
        <label for = "stdout"><b>Output</b></label>
        <TextArea id="stdout" rows={9} value={output} style={outputBoxStyle} disabled={true}/>
    </div>
}

const mapStateToProps = (state)=>({
    editorMode : state.editorMode
})

export default connect(mapStateToProps)(StdIO);