import {CHANGE_LANGUAGE,  EDITOR_CODE_ON_CHANGE} from "../actionReducerConstants";

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
