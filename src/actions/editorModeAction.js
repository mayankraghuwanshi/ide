import {CHANGE_LANGUAGE} from "../actionReducerConstants";

export const changeLanguageAction =(language)=>{
    return {
        type : CHANGE_LANGUAGE,
        payload : language
    }
}