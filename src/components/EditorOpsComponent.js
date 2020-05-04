import React from "react";
import Select from './SelectComponent';
import {connect} from "react-redux";

const EditorOpsComponent=(props)=>{
    const {editorOption , editorMode} = props;
    const themeOptions = [
        {
            name : "Monokai",
            value : "monokai",
        },
        {
            name : "GitHub",
            value : "github",
        },
        {
            name : "Kuroir",
            value : "kuroir",
        },
        {
            name : "Xcode",
            value : "xcode",
        },
        {
            name : "TextMate",
            value : "textmate",
        },
        {
            name : "Solarized Dark",
            value : "solarized_dark",
        },
        {
            name : "Solarized Light",
            value : "solarized_light",
        },
    ]

    const modeOptions = [
        {
            name : "Java",
            value : "java"
        },
        {
            name : "Python",
            value : "python"
        },
        {
            name : "JavaScript",
            value : "javascript"
        },


    ]

    return (
        <div>
            <Select
                name = "theme"
                options = {themeOptions}
                defaultValue={editorOption.theme}
                width = {130}
                onChange={()=>null}
            />
            <Select
                name = "mode"
                options = {modeOptions}
                defaultValue={editorMode.name}
                width = {100}
                onChange={()=>null}
            />
        </div>
    );
}

const mapStateToProps = (state)=>({
    editorOption: state.editorOption,
    editorMode : state.editorMode

})

export default connect(mapStateToProps)(EditorOpsComponent)