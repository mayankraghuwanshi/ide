(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,n){e.exports=n(297)},168:function(e,t,n){},215:function(e,t){},297:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(168),n(31)),u=n(144),i=n(3),d={liveMode:!0,roomId:null,socket:null},s={java:{language:"java",code:'public class Solution{\n    public static void main(String args[]){\n        System.out.println("Hello, World!");\n    }\n}',stdin:"",stdout:"",stderr:""},python:{language:"python",code:'print("Hello, World!")',stdin:"",stdout:"",stderr:""},javascript:{language:"javascript",code:'console.log("Hello, World!");',stdin:"",stdout:"",stderr:""}},m={theme:"monokai",fontSize:18,showGutter:!0,placeholder:"Happy Coding",language:s.java.language,code:s.java.code,stdin:s.java.stdin,stdout:s.java.stdout,stderr:s.java.stderr,isExecuting:!1},E=Object(l.c)({room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ROOM":return Object(i.a)(Object(i.a)({},e),{},{roomId:a});case"CHANGE_BROADCAST_MODE":return Object(i.a)(Object(i.a)({},e),{},{broadcastMode:!e.broadcastMode});case"SET_ROOM_WITH_BROADCAST":return{roomId:a.roomId,broadcastMode:a.broadcastMode};case"INITIALIZE_SOCKET":return Object(i.a)(Object(i.a)({},e),{},{socket:a});case"REMOVE_SOCKET":return Object(i.a)(Object(i.a)({},e),{},{socket:null});case"INITIALIZE_LIVE_MODE":return Object(i.a)(Object(i.a)({},e),{},{roomId:a.roomId,socket:a.socket,liveMode:!0});case"INITIALIZE_SINGLE_MODE":return Object(i.a)(Object(i.a)({},e),{},{roomId:a.roomId,socket:null,liveMode:!1});default:return e}},editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHANGE_LANGUAGE":return Object(i.a)(Object(i.a)({},e),{},{language:s[a].language,code:s[a].code,stdin:s[a].stdin,stdout:s[a].stdout,stderr:s[a].stderr});case"CHANGE_THEME":return Object(i.a)(Object(i.a)({},e),{},{theme:a});case"CHANGE_FONT":return Object(i.a)(Object(i.a)({},e),{},{fontSize:a});case"CHANGE_SHOW_GUTTER":return Object(i.a)(Object(i.a)({},e),{},{showGutter:!e.showGutter});case"CHANGE_STDIN":return Object(i.a)(Object(i.a)({},e),{},{stdin:a});case"CHANGE_CODE":return Object(i.a)(Object(i.a)({},e),{},{code:a});case"EXECUTION_STATR":return Object(i.a)(Object(i.a)({},e),{},{isExecuting:!0});case"EXECUTION_STATR":return Object(i.a)(Object(i.a)({},e),{},{isExecuting:!1});case"CHANGE_OPS_TO_DEFAULT":return m;default:return e}}}),p=[u.a],g=Object(l.e)(E,{},Object(l.d)(l.a.apply(void 0,p),window.devToolsExtension&&window.devToolsExtension())),b=n(20),h=n(146),O=n.n(h),v=(n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(64)),f=n.n(v),j=(n(147),Object(b.b)((function(e){return{editor:e.editor}}),{changeEditorCodeAction:function(e){return function(t){return t({type:"CHANGE_CODE",payload:e})}}})((function(e){var t=e.editor,n=e.changeEditorCodeAction;return o.a.createElement("div",{style:{margin:"2px",width:"70%"}},o.a.createElement(O.a,{name:"defaultCode",width:"100%",height:"80vh",mode:t.language,theme:t.theme,fontSize:t.fontSize,showGuttet:t.showGutter,placeholder:t.placeholder,value:t.code,onChange:n,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:!0}}))}))),A=n(300).a.TextArea,y={display:"flex",flexDirection:"column",width:"30%"},T=Object(b.b)((function(e){return{editor:e.editor}}),{changeStdinAction:function(e){return function(t){return t({type:"CHANGE_STDIN",payload:e})}}})((function(e){var t=e.editor,n=e.changeStdinAction,a=t.stderr.length>0?t.stderr:t.stdout,r={color:t.stderr.length>0?"red":"black"};return o.a.createElement("div",{style:y},o.a.createElement("label",{for:"stdin"},o.a.createElement("b",null,"Input")),o.a.createElement(A,{id:"stdin",rows:9,value:t.stdin,onChange:function(e){return n(e.target.value)}}),o.a.createElement("label",{for:"stdout"},o.a.createElement("b",null,"Output")),o.a.createElement(A,{id:"stdout",rows:9,value:a,style:r,disabled:!0}))})),C=n(301),S=C.a.Option,_=function(e){var t=e.name,n=e.options,a=e.defaultValue,r=e.width,c=e.onChange,l={margin:"0 2px 0 2px",borderRadius:"0",border:"none",width:"".concat(r,"px")};return o.a.createElement(C.a,{name:t,defaultValue:a,style:l,onChange:c},n.map((function(e){return o.a.createElement(S,{value:e.value},e.name)})))},I=n(102),G=n(302),N=[{name:"Monokai",value:"monokai"},{name:"GitHub",value:"github"},{name:"Kuroir",value:"kuroir"},{name:"Xcode",value:"xcode"},{name:"TextMate",value:"textmate"},{name:"Solarized Dark",value:"solarized_dark"},{name:"Solarized Light",value:"solarized_light"}],w=[{name:"Java",value:"java"},{name:"Python",value:"python"},{name:"JavaScript",value:"javascript"}],H=[{name:12,value:12},{name:14,value:14},{name:16,value:16},{name:18,value:18},{name:20,value:20},{name:24,value:24},{name:28,value:28},{name:32,value:32},{name:36,value:36},{name:40,value:40}],k=Object(b.b)((function(e){return{editor:e.editor,socket:e.socket,room:e.room}}),{changeLanguageAction:function(e){return function(t){return t({type:"CHANGE_LANGUAGE",payload:e})}},changeThemeAction:function(e){return function(t){return t({type:"CHANGE_THEME",payload:e})}},changeFontAction:function(e){return function(t){return t({type:"CHANGE_FONT",payload:e})}},changeShowGutterAction:function(){return function(e){return e({type:"CHANGE_SHOW_GUTTER",payload:null})}},changeOpsToDefaultAction:function(){return function(e){return e({type:"CHANGE_OPS_TO_DEFAULT",payload:null})}}})((function(e){var t=e.editor,n=e.changeThemeAction,r=e.changeFontAction,c=e.changeLanguageAction,l=e.changeOpsToDefaultAction;return Object(a.useEffect)((function(){}),[t]),o.a.createElement("div",{style:{margin:"2px"}},o.a.createElement(_,{name:"theme",options:N,defaultValue:t.theme,onChange:n}),o.a.createElement(_,{name:"mode",options:w,defaultValue:t.language,onChange:c}),o.a.createElement(_,{name:"fontSize",options:H,defaultValue:t.fontSize,onChange:r}),o.a.createElement(I.a,{type:"primary",style:{backgroundColor:"green",border:"none",margin:"0 2px 0 2px"},icon:o.a.createElement(G.a,null),onClick:function(){return null},loading:!1},"Run"),o.a.createElement(I.a,{type:"primary",style:{backgroundColor:"red",border:"none",margin:"0 2px 0 2px"},onClick:l},"Reset"))})),x=n(33),M=Object(b.b)((function(e){return{}}),{initializeSocketAction:function(e){return function(t){t({type:"INITIALIZE_SOCKET",payload:e})}}})((function(e){var t=Object(x.g)().roomId,n=e.initializeSocketAction;return console.log(t),Object(a.useEffect)((function(){n(f()("http://localhost:4000"))}),[t]),o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement("div",{style:{display:"flex",direction:"row",width:"100%",heght:"100vh"}},o.a.createElement(j,null),o.a.createElement(T,null)))})),D=n(97);var L=function(){return o.a.createElement(b.a,{store:g},o.a.createElement(D.a,{basename:""},o.a.createElement(x.d,null,o.a.createElement(x.b,{exact:!0,path:"/"},o.a.createElement(x.a,{to:"/".concat(Date.now())})),o.a.createElement(x.b,{exact:!0,path:"/:roomId"},o.a.createElement(M,null)))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.fb4537a7.chunk.js.map