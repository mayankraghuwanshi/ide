(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{164:function(e,t,n){e.exports=n(298)},169:function(e,t,n){},216:function(e,t){},298:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(169),n(31)),u=n(143),i=n(3),d={liveMode:!0,roomId:null,socket:null},s={java:{language:"java",code:'public class Solution{\n    public static void main(String args[]){\n        System.out.println("Hello, World!");\n    }\n}',stdin:"",stdout:"",stderr:""},python:{language:"python",code:'print("Hello, World!")',stdin:"",stdout:"",stderr:""},javascript:{language:"javascript",code:'console.log("Hello, World!");',stdin:"",stdout:"",stderr:""}},m={theme:"monokai",fontSize:18,showGutter:!0,placeholder:"Happy Coding",language:s.java.language,code:s.java.code,stdin:s.java.stdin,stdout:s.java.stdout,stderr:s.java.stderr,isExecuting:!1},E=Object(l.c)({room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ROOM":return Object(i.a)(Object(i.a)({},e),{},{roomId:a});case"CHANGE_BROADCAST_MODE":return Object(i.a)(Object(i.a)({},e),{},{broadcastMode:!e.broadcastMode});case"SET_ROOM_WITH_BROADCAST":return{roomId:a.roomId,broadcastMode:a.broadcastMode};case"INITIALIZE_SOCKET":return Object(i.a)(Object(i.a)({},e),{},{socket:a});case"REMOVE_SOCKET":return Object(i.a)(Object(i.a)({},e),{},{socket:null});case"INITIALIZE_LIVE_MODE":return Object(i.a)(Object(i.a)({},e),{},{roomId:a.roomId,socket:a.socket,liveMode:!0});case"INITIALIZE_SINGLE_MODE":return Object(i.a)(Object(i.a)({},e),{},{roomId:a.roomId,socket:null,liveMode:!1});default:return e}},editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHANGE_LANGUAGE":return Object(i.a)(Object(i.a)({},e),{},{language:s[a].language,code:s[a].code,stdin:s[a].stdin,stdout:s[a].stdout,stderr:s[a].stderr});case"CHANGE_THEME":return Object(i.a)(Object(i.a)({},e),{},{theme:a});case"CHANGE_FONT":return Object(i.a)(Object(i.a)({},e),{},{fontSize:a});case"CHANGE_SHOW_GUTTER":return Object(i.a)(Object(i.a)({},e),{},{showGutter:!e.showGutter});case"CHANGE_STDIN":return Object(i.a)(Object(i.a)({},e),{},{stdin:a});case"CHANGE_CODE":return Object(i.a)(Object(i.a)({},e),{},{code:a});case"EXECUTION_STATR":return Object(i.a)(Object(i.a)({},e),{},{isExecuting:!0});case"EXECUTION_STATR":return Object(i.a)(Object(i.a)({},e),{},{isExecuting:!1});case"CHANGE_OPS_TO_DEFAULT":return m;default:return e}}}),p=[u.a],h=Object(l.e)(E,{},Object(l.d)(l.a.apply(void 0,p),window.devToolsExtension&&window.devToolsExtension())),g=n(20),b=n(145),O=n.n(b),v=(n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(146)),f=n.n(v),j=n(147),A=n.n(j),y=Object(g.b)((function(e){return{editor:e.editor}}),{changeEditorCodeAction:function(e){return function(t){return t({type:"CHANGE_CODE",payload:e})}}})((function(e){var t=e.editor,n=e.changeEditorCodeAction;return o.a.createElement("div",{style:{margin:"2px",width:"70%"}},o.a.createElement(O.a,{name:"defaultCode",width:"100%",height:"80vh",mode:t.language,theme:t.theme,fontSize:t.fontSize,showGuttet:t.showGutter,placeholder:t.placeholder,value:t.code,onChange:n,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:!0}}))})),I=n(301).a.TextArea,C={display:"flex",flexDirection:"column",width:"30%"},T=Object(g.b)((function(e){return{editor:e.editor}}),{changeStdinAction:function(e){return function(t){return t({type:"CHANGE_STDIN",payload:e})}}})((function(e){var t=e.editor,n=e.changeStdinAction,a=t.stderr.length>0?t.stderr:t.stdout,r={color:t.stderr.length>0?"red":"black"};return o.a.createElement("div",{style:C},o.a.createElement("label",{for:"stdin"},o.a.createElement("b",null,"Input")),o.a.createElement(I,{id:"stdin",rows:9,value:t.stdin,onChange:function(e){return n(e.target.value)}}),o.a.createElement("label",{for:"stdout"},o.a.createElement("b",null,"Output")),o.a.createElement(I,{id:"stdout",rows:9,value:a,style:r,disabled:!0}))})),_=n(302),S=_.a.Option,N=function(e){var t=e.name,n=e.options,a=e.defaultValue,r=e.width,c=e.onChange,l={margin:"0 2px 0 2px",borderRadius:"0",border:"none",width:"".concat(r,"px")};return o.a.createElement(_.a,{name:t,defaultValue:a,style:l,onChange:c},n.map((function(e){return o.a.createElement(S,{value:e.value},e.name)})))},G=n(101),H=n(303),w=[{name:"Monokai",value:"monokai"},{name:"GitHub",value:"github"},{name:"Kuroir",value:"kuroir"},{name:"Xcode",value:"xcode"},{name:"TextMate",value:"textmate"},{name:"Solarized Dark",value:"solarized_dark"},{name:"Solarized Light",value:"solarized_light"}],x=[{name:"Java",value:"java"},{name:"Python",value:"python"},{name:"JavaScript",value:"javascript"}],k=[{name:12,value:12},{name:14,value:14},{name:16,value:16},{name:18,value:18},{name:20,value:20},{name:24,value:24},{name:28,value:28},{name:32,value:32},{name:36,value:36},{name:40,value:40}],L=Object(g.b)((function(e){return{editor:e.editor,socket:e.socket,room:e.room}}),{changeLanguageAction:function(e){return function(t){return t({type:"CHANGE_LANGUAGE",payload:e})}},changeThemeAction:function(e){return function(t){return t({type:"CHANGE_THEME",payload:e})}},changeFontAction:function(e){return function(t){return t({type:"CHANGE_FONT",payload:e})}},changeShowGutterAction:function(){return function(e){return e({type:"CHANGE_SHOW_GUTTER",payload:null})}},changeOpsToDefaultAction:function(){return function(e){return e({type:"CHANGE_OPS_TO_DEFAULT",payload:null})}}})((function(e){var t=e.editor,n=e.changeThemeAction,r=e.changeFontAction,c=e.changeLanguageAction,l=e.changeOpsToDefaultAction;return Object(a.useEffect)((function(){}),[t]),o.a.createElement("div",{style:{margin:"2px"}},o.a.createElement(N,{name:"theme",options:w,defaultValue:t.theme,onChange:n}),o.a.createElement(N,{name:"mode",options:x,defaultValue:t.language,onChange:c}),o.a.createElement(N,{name:"fontSize",options:k,defaultValue:t.fontSize,onChange:r}),o.a.createElement(G.a,{type:"primary",style:{backgroundColor:"green",border:"none",margin:"0 2px 0 2px"},icon:o.a.createElement(H.a,null),onClick:function(){return null},loading:!1},"Run"),o.a.createElement(G.a,{type:"primary",style:{backgroundColor:"red",border:"none",margin:"0 2px 0 2px"},onClick:l},"Reset"))})),M=function(){return o.a.createElement("div",null,o.a.createElement(L,null),o.a.createElement("div",{style:{display:"flex",direction:"row",width:"100%",heght:"100vh"}},o.a.createElement(y,null),o.a.createElement(T,null)))},D=n(96),z=n(33),R=n(162),U=Object(g.b)((function(e){return{}}),{initializeConnectionAction:function(e){return function(t){A.a.get("http://localhost:4000"+"/api/".concat(e)).then((function(n){n.data&&void 0!==n.data&&(n.data.isLive?t({type:"INITIALIZE_LIVE_MODE",payload:{roomId:n.data.roomId,socket:f()("http://localhost:4000")}}):t({type:"INITIALIZE_SINGLE_MODE",payload:e}))})).catch((function(e){return console.error(e)}))}}})((function(e){var t=Object(z.f)().roomId,n=Object(a.useState)(!0),r=Object(R.a)(n,2),c=r[0],l=r[1],u=e.initializeConnectionAction;return Object(a.useEffect)((function(){l(!0),u(t),l(!1)}),[t]),o.a.createElement("div",null,c?o.a.createElement("h1",null,"Loading"):o.a.createElement(M,null))}));var V=function(){return o.a.createElement(g.a,{store:h},o.a.createElement(D.a,{basename:"/ide"},o.a.createElement(z.c,null,o.a.createElement(z.a,{exact:!0,path:"/"},o.a.createElement(M,null)),o.a.createElement(z.a,{exact:!0,path:"/:roomId"},o.a.createElement(U,null)))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(V,null)),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.3a6c929f.chunk.js.map