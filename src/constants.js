const MODES = {
    java : {
        name : "java",
        code : `public class Solution{
    public static void main(String args[]){
        System.out.println("Hello, World!");
    }
}`
        ,
        stdin : "",
        stdout : "",
        stderr : "",

    },
    python : {
        name : "python",
        code : `print("Hello, World!")`,
        stdin : "",
        stdout : "",
        stderr : "",
    },

    javascript : {
        name : "javascript",
        code : `console.log("Hello, World!");`,
        stdin : "",
        stdout : "",
        stderr : "",
    }
}

const DEFAULT_MODE = "java";
const DEFAULT_THEME = "monokai";
const DEFAULT_FONT_SIZE = 18;
const MODE_OPTIONS = ["java" , "javascript" , "python"];
const THEME_OPTIONS = ["monokai" , "github" , "kuroir" , "xcode" , "textmate" , "solarized_dark" , "solarized_light"];
const OPTIONS = {
    mode : DEFAULT_MODE,
    theme : DEFAULT_THEME,
    showGuttet : true,
    placeholder : "MADE IN <3 WITH MAYANK RAGHUVANSHI",
    width : 100,
    fontSize : DEFAULT_FONT_SIZE
}

const URL = "http://localhost:4000";

export default {
    MODES,
    DEFAULT_FONT_SIZE,
    DEFAULT_THEME,
    DEFAULT_MODE,
    MODE_OPTIONS,
    THEME_OPTIONS,
    OPTIONS,
    URL
}