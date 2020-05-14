import {INITIALIZE_ROOM, SET_USER_NAME} from "../ReducerConstants";

export const initializeRoomAction = (socket , roomId)=>dispatch=>{
    dispatch({
        type : INITIALIZE_ROOM,
        payload : {
            socket,
            roomId
        }
    })
}

export const setNameAction = (name)=>dispatch=>{
    dispatch({
        type : SET_USER_NAME,
        payload : name
    })
}