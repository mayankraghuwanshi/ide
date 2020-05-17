import React, {useEffect} from "react";
import Select from '../util/SelectComponent';
import {connect} from "react-redux";
import {
    changeThemeAction,
    changeFontAction,
    changeShowGutterAction,
    changeOpsToDefaultAction,
    startExecutingAction
} from "../../actions/editorAction"
import {changeLanguageAction} from "../../actions/editorAction";
import {Button} from "antd";
import {PoweroffOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {setNameAction} from "../../actions/roomAction";
import {EXECUTE_CODE} from "../../socketConstants";

const EditorNavComponent=(props)=>{
    const {editor , room} = props;
    const socket = room.socket;
    const {
            changeThemeAction ,
            changeFontAction ,
            changeLanguageAction ,
            changeOpsToDefaultAction,
            setNameAction,
            startExecutingAction
          } = props;
    const handleSetName=()=>{
        let name = window.prompt("Enter your name.");
        console.log(name);
        if(name!==''){
            setNameAction(name);
        }
    }

    const handleExecuteOnClick = ()=>{
        startExecutingAction();
        let data = {
            roomId : room.roomId,
            code : editor.code,
            language : editor.language,
            userName : room.userName,
            stdin : editor.stdin
        }
        socket.emit(EXECUTE_CODE , data);
    }


    return (
        <div style={{ height : "40px" , padding : "4px" , backgroundColor : "#02203c", boxShadow: "0px 1px 4px 0px black" , marginBottom : "10px"}}>
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
                onClick = {handleExecuteOnClick}
                loading = {editor.isExecuting}
            >Run</Button>
            <Button
                type = "primary"
                style = {{backgroundColor : "red" ,border  : "none" , margin : "0 2px 0 2px"}}
                onClick = {changeOpsToDefaultAction}
            >Reset</Button>
            <div style={{
                display : "inline",
                witdh : "auto",
                float : "right",
                height : "40px"

            }}>
                <div style={{display : "inline" , lineHeight : "30px", marginRight : "5px"}}>
                    {room.userName!=="" ?
                        <div >
                            <Avatar style={{margin : "0 5px 0 5px"}} size={25} icon={<UserOutlined />} />
                            <h4 style={{display : "inline" , marginRight : "10px"}}>{room.userName}</h4>
                        </div> :
                        <Button onClick={handleSetName}>
                            Login
                        </Button>
                    }
                </div>

            </div>

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
    room : state.room

})

export default connect(mapStateToProps ,
    {
        changeLanguageAction,
        changeThemeAction ,
        changeFontAction ,
        changeShowGutterAction ,
        changeOpsToDefaultAction,
        setNameAction,
        startExecutingAction

    })(EditorNavComponent)