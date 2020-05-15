import {
    CHANGE_LANGUAGE,
    CHANGE_STDIN,
    CHANGE_THEME,
    CHANGE_FONT,
    CHANGE_WIDTH,
    CHANGE_SHOW_GUTTER,
    CHANGE_OPS_TO_DEFAULT,
    CHANGE_CODE,
    INITIALIZE_INITIAL_CODE, ERROR, EXECUTING_TRUE, EXECUTION_STATR, EXECUTION_STOP, EXECUTED_CODE
} from "../ReducerConstants";
import axios from 'axios';
import {URL} from '../url';





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

export const startExecutingAction = ()=>dispatcher=>{
    dispatcher({
        type : EXECUTION_STATR,
    })
}

export const stopExecutingAction = ()=>dispatcher=>{
    console.log("stop executing...")
    dispatcher({
        type : EXECUTION_STOP,
    })
}

export const executedResultAction =({
    stdin , stdout , stderr
})=>dispatch=>{
    dispatch({
        type : EXECUTED_CODE,
        payload : {
            stdin,
            stderr,
            stdout
        }
    })
}