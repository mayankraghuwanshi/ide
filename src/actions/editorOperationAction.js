// import {URL} from '../constants';
import axios from 'axios';
import {CHANGE_BROADCAST_MODE, SHOW_EXECUTION_RESULT} from "../actionReducerConstants";
const URL = "http://localhost:4000";
export const executeCodeAction=({broadcastMode , socket , code})=>dispatch=>{
    console.log(broadcastMode,socket,code)
    return dispatch({
        type : CHANGE_BROADCAST_MODE
    })
}

export const executeSingleModeAction = (editorMode)=>(dispatch)=>{
    axios.post(`${URL}/execute` , {editorMode})
        .then(response=>{
            dispatch({
                type: SHOW_EXECUTION_RESULT,
                payload: response.data
            })
        })
        .catch(error=>{
            dispatch({
                type : "ERROR",
                payload : error
            })
        })
}