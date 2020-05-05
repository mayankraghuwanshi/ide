import {INITIALIZE_SOCKET} from "../actionReducerConstants";

export const initialiseSocketAction=(socket)=>dispatch=>{
    return dispatch({
        type : INITIALIZE_SOCKET,
        payload : socket
    })
}