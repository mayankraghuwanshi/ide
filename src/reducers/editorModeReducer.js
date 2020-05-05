import CONSTANTS from '../constants';
import {
    CHANGE_LANGUAGE,
    CHANGE_STDIN,
    EDITOR_CODE_ON_CHANGE,
    EXECUTE_CODE,
    SHOW_EXECUTION_RESULT
} from "../actionReducerConstants";
const MODES = CONSTANTS.MODES
const initialState = MODES['java']


export default (state = initialState , {type , payload})=> {
    switch (type) {
        case CHANGE_LANGUAGE : return MODES[payload];
        case EXECUTE_CODE : return {
            ...state,
            stdin : payload.stdin,
            stdout : payload.stdout,
        }
        case EDITOR_CODE_ON_CHANGE : return {
            ...state,
            code : payload
        }
        case SHOW_EXECUTION_RESULT : return {
            ...state,
            stdout : payload.stdout,
            stderr : payload.stderr
        }
        default :
            return state
    }
}

