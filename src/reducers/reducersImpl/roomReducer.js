import {
    CHANGE_BROADCAST_MODE,  INITIALIZE_ROOM,
    INITIALIZE_SOCKET, REMOVE_SOCKET,
    SET_ROOM,
    SET_ROOM_WITH_BROADCAST, SET_USER_NAME
} from "../../ReducerConstants";

const initialState = {
    roomId : null,
    socket : null,
    userName : "",

}

export default (state = initialState , {type , payload})=>{
    switch (type) {
        case SET_ROOM : return {
            ...state,
            roomId : payload
        }
        case CHANGE_BROADCAST_MODE : return {
            ...state,
            broadcastMode: !state.broadcastMode
        }
        case SET_ROOM_WITH_BROADCAST : return {
            roomId: payload.roomId,
            broadcastMode: payload.broadcastMode
        }
        case INITIALIZE_SOCKET : return {
            ...state,
            socket: payload
        }
        case REMOVE_SOCKET : return {
            ...state,
            socket: null
        }
        case SET_USER_NAME : return {
            ...state,
            userName: payload
        }
        case INITIALIZE_ROOM : return {
            ...state,
            socket: payload.socket,
            roomId: payload.roomId
        }
        default : return state
    }
}