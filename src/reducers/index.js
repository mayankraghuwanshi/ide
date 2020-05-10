import {combineReducers} from "redux";
import roomReducer from "./reducersImpl/roomReducer";
import socketReducer from "./reducersImpl/socketReducer";
import editorReducer from "./reducersImpl/editorReducer";

export default combineReducers({

    room : roomReducer,
    socket : socketReducer,
    editor : editorReducer

})
