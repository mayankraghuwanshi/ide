import CONSTANTS from '../constants';
const MODES = CONSTANTS.MODES
const DEFAULT_MODE = CONSTANTS.DEFAULT_MODE
const initialState = MODES['java']

export default (state = initialState , {type , payload})=> {
    switch (type) {
        case "JAVA" :
            return MODES['java'];
        case "PYTHON" :
            return MODES['python'];
        case "JAVASCRIPT" :
            return MODES['javascript'];
        default :
            return state
    }
}