import React, {useEffect} from "react";
import Select from './util/SelectComponent';
import {connect} from "react-redux";
import {changeThemeAction , changeFontAction ,changeShowGutterAction, changeOpsToDefaultAction} from "../actions/editorAction"
import {changeLanguageAction} from "../actions/editorAction";
import {Button} from "antd";
import {PoweroffOutlined} from '@ant-design/icons';


const EditorOpsComponent=(props)=>{
    const {editor} = props;
    const {
            changeThemeAction ,
            changeFontAction ,
            changeLanguageAction ,
            changeOpsToDefaultAction,
          } = props;

    useEffect(()=>{
        // console.log(editor)
    } , [editor])

    return (
        <div style={{margin : "2px" }}>
            <Select
                name = "theme"
                options = {themeOptions}
                defaultValue={editor.theme}
                // width = {130}
                onChange={changeThemeAction}
            />
            <Select
                name = "mode"
                options = {modeOptions}
                defaultValue={editor.language}
                // width = {100}
                onChange={changeLanguageAction}
            />
            <Select
                name = "fontSize"
                options={fontOptions}
                defaultValue={editor.fontSize}
                // width={70}
                onChange={changeFontAction}
            />
            <Button
                type = "primary"
                style = {{backgroundColor : "green" ,border  : "none" , margin : "0 2px 0 2px"}}
                icon = {<PoweroffOutlined/>}
                onClick = {()=>null}
                loading = {false}
            >Run</Button>
            <Button
                type = "primary"
                style = {{backgroundColor : "red" ,border  : "none" , margin : "0 2px 0 2px"}}
                onClick = {changeOpsToDefaultAction}
            >Reset</Button>
        </div>
    );
}


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

const fontOptions = [
    {
        name : 12,
        value : 12
    },
    {
        name : 14,
        value : 14
    },
    {
        name : 16,
        value : 16
    },
    {
        name : 18,
        value : 18
    },
    {
        name: 20,
        value : 20
    },
    {
        name : 24,
        value : 24
    },
    {
        name : 28,
        value : 28
    },
    {
        name : 32,
        value : 32
    },
    {
        name : 36,
        value: 36
    },
    {
        name : 40,
        value : 40
    }]

const mapStateToProps = (state)=>({
    editor : state.editor,
    socket : state.socket,
    room : state.room

})

export default connect(mapStateToProps ,
    {
        changeLanguageAction,
        changeThemeAction ,
        changeFontAction ,
        changeShowGutterAction ,
        changeOpsToDefaultAction,
    })(EditorOpsComponent)