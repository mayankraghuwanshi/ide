import {combineReducers} from "redux";
import editorOptionReducer from './editorOptionReducer'
import editorModeReducer from "./editorModeReducer";

export default combineReducers({

    editorMode : editorModeReducer,
    editorOption : editorOptionReducer,

})
