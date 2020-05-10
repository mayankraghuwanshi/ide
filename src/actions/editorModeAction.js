import {CHANGE_LANGUAGE, CHANGE_STDIN, EDITOR_CODE_ON_CHANGE} from "../actionReducerConstants";

export const changeLanguageAction =(language)=>(dispatch)=>{
    return dispatch({
        type : CHANGE_LANGUAGE,
        payload : language
    })
}

export const editorCodeOnChangeAction = (code)=>dispatch=>{
    return dispatch({
        type : EDITOR_CODE_ON_CHANGE,
        payload : code
    })
}

export const changeStdinAction =(stdin)=>dispatch=>{
    dispatch({
        type : CHANGE_STDIN,
        payload : stdin
    })
}
