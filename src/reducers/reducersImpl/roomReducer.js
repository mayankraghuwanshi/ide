import {
    CHANGE_BROADCAST_MODE, INITIALIZE_LIVE_MODE, INITIALIZE_SINGLE_MODE,
    INITIALIZE_SOCKET, REMOVE_SOCKET,
    SET_ROOM,
    SET_ROOM_WITH_BROADCAST
} from "../../actionReducerConstants";

const initialState = {
    liveMode : true,
    roomId : null,
    socket : null,

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
        case INITIALIZE_LIVE_MODE : return {
            ...state,
            roomId: payload.roomId,
            socket : payload.socket,
            liveMode: true
        }
        case INITIALIZE_SINGLE_MODE : return {
            ...state,
            roomId: payload.roomId,
            socket : null,
            liveMode: false
        }
        default : return state
    }
}