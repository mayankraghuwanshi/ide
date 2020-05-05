import CONSTANTS from '../constants';
import {CHANGE_LANGUAGE} from "../actionReducerConstants";
const MODES = CONSTANTS.MODES
const initialState = MODES['java']


export default (state = initialState , {type , payload})=> {
    switch (type) {
        case CHANGE_LANGUAGE : return MODES[payload];
        default :
            return state
    }
}