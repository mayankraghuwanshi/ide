import {combineReducers} from "redux";
import editorOptionReducer from './editorOptionReducer'
import editorModeReducer from "./editorModeReducer";
import roomReducer from "./roomReducer";
import socketReducer from "./socketReducer";

export default combineReducers({

    editorMode : editorModeReducer,
    editorOption : editorOptionReducer,
    room : roomReducer,
    socket : socketReducer

})
