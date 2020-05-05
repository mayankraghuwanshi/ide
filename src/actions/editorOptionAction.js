import {
    CHANGE_THEME,
    CHANGE_FONT,
    CHANGE_WIDTH,
    CHANGE_SHOW_GUTTER,
    CHANGE_OPS_TO_DEFAULT
} from "../actionReducerConstants";

export const changeThemeAction = (themeName)=>{
    return ({
       type: CHANGE_THEME,
       payload : themeName
    });
}

export const changeFontAction = (fontSize)=>{
    return {
        type : CHANGE_FONT,
        payload : fontSize,
    }
}
export const changeWidthAction =(width)=>{
    return {
        type : CHANGE_WIDTH,
        payload : width
    }
}

export const changeShowGutterAction =()=>{
    return {
        type : CHANGE_SHOW_GUTTER,
        payload : null
    }
}

export const changeOpsToDefaultAction=()=>{
    return {
        type : CHANGE_OPS_TO_DEFAULT,
        payload : null
    }
}

