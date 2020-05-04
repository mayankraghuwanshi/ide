import CONSTANT from "../constants";

const initialState = {
    theme : CONSTANT.DEFAULT_THEME,
    fontSize : CONSTANT.DEFAULT_FONT_SIZE,
    showGutter : false,
    placeholder : "Happy coding..."

}

export default (state = initialState , {payload , type})=>{
    switch (type) {
        case "CHANGE_THEME" : {
            return {
                ...state,
                theme : payload
            }
        }
        case "CHANGE_FONT" : return {
            ...state,
            fontSize: payload
        }
        case "CHANGE_SHOW_GUTTER" : return {
            ...state,
            showGutter: payload
        }
        case "CHANGE_WIDTH" : return {
            ...state,
            width : payload
        }
        default : return state;
    }
}