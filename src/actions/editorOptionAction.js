import {
    CHANGE_THEME,
    CHANGE_FONT,
    CHANGE_WIDTH,
    CHANGE_SHOW_GUTTER,
    CHANGE_OPS_TO_DEFAULT
} from "../actionReducerConstants";

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

