import CONSTANT from "../constants";
import {
    CHANGE_FONT,
    CHANGE_OPS_TO_DEFAULT,
    CHANGE_SHOW_GUTTER,
    CHANGE_THEME,
    CHANGE_WIDTH
} from '../actionReducerConstants';

const initialState = {
    theme : CONSTANT.DEFAULT_THEME,
    fontSize : CONSTANT.DEFAULT_FONT_SIZE,
    showGutter : false,
    placeholder : "Happy coding..."

}

export default (state = initialState , {payload , type})=>{
    switch (type) {
        case CHANGE_THEME : {
            return {
                ...state,
                theme : payload
            }
        }
        case CHANGE_FONT : return {
            ...state,
            fontSize: payload
        }
        case CHANGE_SHOW_GUTTER: return {
            ...state,
            showGutter: !state.showGutter
        }
        case CHANGE_WIDTH : return {
            ...state,
            width : payload
        }
        case CHANGE_OPS_TO_DEFAULT : return initialState
        default : return state;
    }
}