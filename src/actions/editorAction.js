import {
    CHANGE_LANGUAGE,
    CHANGE_STDIN,
    CHANGE_THEME,
    CHANGE_FONT,
    CHANGE_WIDTH,
    CHANGE_SHOW_GUTTER,
    CHANGE_OPS_TO_DEFAULT,
    CHANGE_CODE,
    INITIALIZE_LIVE_MODE,
    INITIALIZE_SINGLE_MODE,
    INITIALIZE_SOCKET,
    INITIALIZE_INITIAL_CODE, ERROR
} from "../ReducerConstants";
import io from 'socket.io-client'
import axios from 'axios';
const URL = "http://localhost:4000"





export const changeLanguageAction =(language)=>(dispatch)=>{
    return dispatch({
        type : CHANGE_LANGUAGE,
        payload : language
    })
}

export const changeThemeAction = (themeName)=>dispatch=>{
    return dispatch({
        type: CHANGE_THEME,
        payload : themeName
    });
}

export const changeFontAction = (fontSize)=>dispatch=>{
    return dispatch({
        type : CHANGE_FONT,
        payload : fontSize,
    })
}
export const changeWidthAction =(width)=>dispatch=>{
    return dispatch({
        type : CHANGE_WIDTH,
        payload : width
    })
}

export const changeShowGutterAction =()=>dispatch=>{
    return dispatch({
        type : CHANGE_SHOW_GUTTER,
        payload : null
    })
}

export const changeOpsToDefaultAction=()=>dispatch=>{
    return dispatch({
        type : CHANGE_OPS_TO_DEFAULT,
        payload : null
    })
}

export const changeStdinAction=(stdin)=>dispatch=>{
    return dispatch({
        type : CHANGE_STDIN,
        payload : stdin
    })
}

export const changeEditorCodeAction = (code)=>dispatch=>{
    return dispatch({
        type : CHANGE_CODE,
        payload : code
    })
}


export const initializeConnectionAction = (roomId)=>dispatch=>{
    axios.get(URL+`/api/${roomId}`)
        .then(response=>{
            if(response.data && response.data!==undefined){
                if(response.data.isLive){
                    dispatch({
                        type : INITIALIZE_LIVE_MODE,
                        payload : {
                            roomId : response.data.roomId,
                            socket : io(URL)
                        }
                    })
                }
                else{
                    dispatch({
                        type : INITIALIZE_SINGLE_MODE,
                        payload : roomId
                    })
                }
            }
        })
        .catch(error=>console.error(error));
}

export const initializeSocketAction = (socket)=>dispatch=>{
    dispatch({
        type : INITIALIZE_SOCKET,
        payload : socket
    })
}

export const initializeNewRoomAction = ()=>dispatch=>{

}


export const syncInitialStateAction = (roomId)=>dispatch=>{
    axios.post(URL+"/syncstate" , {roomId})
        .then(response=>{
            if((response.data.success!==null || response.data.success!==undefined) && response.data.success){
                dispatch({
                    type : INITIALIZE_INITIAL_CODE,
                    payload : {
                        language : response.data.data.language,
                        code : response.data.data.code
                    }
                })
            }else {
                dispatch({
                    type : ERROR,
                    payload : response.data.data.error
                })
            }
        })
        .catch(error=>{
            dispatch({
                type : ERROR,
                payload : error
            })
        })
}