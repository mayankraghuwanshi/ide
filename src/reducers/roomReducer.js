import {CHANGE_BROADCAST_MODE, SET_ROOM, SET_ROOM_WITH_BROADCAST} from "../actionReducerConstants";

const initialState = {
    broadcastMode : true,
    roomId : null,
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
        default : return state
    }
}