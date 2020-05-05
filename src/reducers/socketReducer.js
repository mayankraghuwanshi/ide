import {INITIALIZE_SOCKET, REMOVE_SOCKET} from "../actionReducerConstants";


const initialState = {
    socket : null,
}

export default (state = initialState , {type , payload})=>{
    switch (type) {
        case INITIALIZE_SOCKET : return {
            ...state,
            socket: payload
        }
        case REMOVE_SOCKET : return {
            ...state,
            socket: null
        }
        default : return state;
    }
}