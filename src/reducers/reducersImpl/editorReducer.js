import {
    CHANGE_FONT,
    CHANGE_CODE,
    CHANGE_LANGUAGE,
    CHANGE_SHOW_GUTTER,
    CHANGE_STDIN,
    CHANGE_THEME,
    CHANGE_OPS_TO_DEFAULT, EXECUTION_STATR, EXECUTION_STOP, INITIALIZE_INITIAL_CODE, ERROR
} from "../../ReducerConstants";
import {DEFAULT_LANGUAGE , DEFAULT_FONT_SIZE , DEFAULT_THEME} from "../../constants";

const modes = {
    java : {
        language : "java",
        code : `public class Solution{
    public static void main(String args[]){
        System.out.println("Hello,");
    }
}`
        ,
        stdin : "",
        stdout : "",
        stderr : "",

    },
    python : {
        language : "python",
        code : `print("Hello, World!")`,
        stdin : "",
        stdout : "",
        stderr : "",
    },

    javascript : {
        language : "javascript",
        code : `console.log("Hello, World!");`,
        stdin : "",
        stdout : "",
        stderr : "",
    }
}

const initialState = {
    theme : DEFAULT_THEME,
    fontSize : DEFAULT_FONT_SIZE,
    showGutter : true,
    placeholder : "Happy Coding",
    language : modes[DEFAULT_LANGUAGE].language,
    code : modes[DEFAULT_LANGUAGE].code,
    stdin : modes[DEFAULT_LANGUAGE].stdin,
    stdout : modes[DEFAULT_LANGUAGE].stdout,
    stderr : modes[DEFAULT_LANGUAGE].stderr,
    isExecuting : false,
    error : ""
}

export default (state = initialState , {type, payload})=>{
    switch (type) {
        case CHANGE_LANGUAGE : return {
            ...state,
            language : modes[payload].language,
            code : modes[payload].code,
            stdin : modes[payload].stdin,
            stdout : modes[payload].stdout,
            stderr : modes[payload].stderr
        }
        case CHANGE_THEME : return {
            ...state,
            theme: payload
        }
        case CHANGE_FONT : return {
            ...state,
            fontSize: payload
        }
        case CHANGE_SHOW_GUTTER : return {
            ...state,
            showGutter: !state.showGutter
        }
        case CHANGE_STDIN : return {
            ...state,
            stdin: payload
        }
        case CHANGE_CODE : return {
             ...state,
            code : payload
        }
        case EXECUTION_STATR : return {
            ...state,
            isExecuting: true
        }
        case EXECUTION_STOP: return {
            ...state,
            isExecuting: false
        }
        case INITIALIZE_INITIAL_CODE : return {
            ...state,
            language : payload.language,
            code : payload.code
        }
        case ERROR : return {
            ...state,
            error : payload
        }
        case CHANGE_OPS_TO_DEFAULT : return initialState;
        default : return state
    }
}














