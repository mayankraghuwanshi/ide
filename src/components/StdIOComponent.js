import React from "react";
import {Input} from "antd";
import {connect} from 'react-redux';



const {TextArea} = Input;
const style = {
    display : "flex",
    flexDirection : "column",
    width : "30%"
}


const StdIO = (props)=>{
    const {editorMode} = props;

    return <div style={style}>
        <label for = "stdin"><b>Input</b></label>
        <TextArea id="stdin" rows={9} value={editorMode.stdin}/>
        <label for = "stdout"><b>Output</b></label>
        <TextArea id="stdout" rows={9} value={editorMode.stdout} disabled={true}/>
    </div>
}

const mapStateToProps = (state)=>({
    editorMode : state.editorMode
})

export default connect(mapStateToProps)(StdIO);