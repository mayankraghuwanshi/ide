import {combineReducers} from "redux";
import roomReducer from "./reducersImpl/roomReducer";
import editorReducer from "./reducersImpl/editorReducer";

export default combineReducers({

    room : roomReducer,
    editor : editorReducer

})
