(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,n){e.exports=n(303)},173:function(e,t,n){},221:function(e,t){},303:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(173),n(31)),i=n(146),u=n(3),d={liveMode:!0,roomId:null,socket:null},s={java:{language:"java",code:'public class Solution{\n    public static void main(String args[]){\n        System.out.println("Hello, World!");\n    }\n}',stdin:"",stdout:"",stderr:""},python:{language:"python",code:'print("Hello, World!")',stdin:"",stdout:"",stderr:""},javascript:{language:"javascript",code:'console.log("Hello, World!");',stdin:"",stdout:"",stderr:""}},m={theme:"monokai",fontSize:18,showGutter:!0,placeholder:"Happy Coding",language:s.java.language,code:s.java.code,stdin:s.java.stdin,stdout:s.java.stdout,stderr:s.java.stderr,isExecuting:!1},p=Object(l.c)({room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ROOM":return Object(u.a)(Object(u.a)({},e),{},{roomId:a});case"CHANGE_BROADCAST_MODE":return Object(u.a)(Object(u.a)({},e),{},{broadcastMode:!e.broadcastMode});case"SET_ROOM_WITH_BROADCAST":return{roomId:a.roomId,broadcastMode:a.broadcastMode};case"INITIALIZE_SOCKET":return Object(u.a)(Object(u.a)({},e),{},{socket:a});case"REMOVE_SOCKET":return Object(u.a)(Object(u.a)({},e),{},{socket:null});case"INITIALIZE_LIVE_MODE":return Object(u.a)(Object(u.a)({},e),{},{roomId:a.roomId,socket:a.socket,liveMode:!0});case"INITIALIZE_SINGLE_MODE":return Object(u.a)(Object(u.a)({},e),{},{roomId:a.roomId,socket:null,liveMode:!1});default:return e}},editor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHANGE_LANGUAGE":return Object(u.a)(Object(u.a)({},e),{},{language:s[a].language,code:s[a].code,stdin:s[a].stdin,stdout:s[a].stdout,stderr:s[a].stderr});case"CHANGE_THEME":return Object(u.a)(Object(u.a)({},e),{},{theme:a});case"CHANGE_FONT":return Object(u.a)(Object(u.a)({},e),{},{fontSize:a});case"CHANGE_SHOW_GUTTER":return Object(u.a)(Object(u.a)({},e),{},{showGutter:!e.showGutter});case"CHANGE_STDIN":return Object(u.a)(Object(u.a)({},e),{},{stdin:a});case"CHANGE_CODE":return Object(u.a)(Object(u.a)({},e),{},{code:a});case"EXECUTION_STATR":return Object(u.a)(Object(u.a)({},e),{},{isExecuting:!0});case"EXECUTION_STATR":return Object(u.a)(Object(u.a)({},e),{},{isExecuting:!1});case"CHANGE_OPS_TO_DEFAULT":return m;default:return e}}}),E=[i.a],h=Object(l.e)(p,{},Object(l.d)(l.a.apply(void 0,E),window.devToolsExtension&&window.devToolsExtension())),g=n(20),b=n(101),v=n.n(b),O=n(148),f=n(165),j=n(149),y=n.n(j),A=(n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(66)),C=n.n(A),T=(n(150),Object(g.b)((function(e){return{editor:e.editor}}),{changeEditorCodeAction:function(e){return function(t){return t({type:"CHANGE_CODE",payload:e})}}})((function(e){var t=e.editor,n=e.changeEditorCodeAction;return o.a.createElement("div",{style:{margin:"2px",width:"70%"}},o.a.createElement(y.a,{name:"defaultCode",width:"100%",height:"80vh",mode:t.language,theme:t.theme,fontSize:t.fontSize,showGuttet:t.showGutter,placeholder:t.placeholder,value:t.code,onChange:n,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2},editorProps:{$blockScrolling:!0}}))}))),S=n(306).a.TextArea,x={display:"flex",flexDirection:"column",width:"30%"},_=Object(g.b)((function(e){return{editor:e.editor}}),{changeStdinAction:function(e){return function(t){return t({type:"CHANGE_STDIN",payload:e})}}})((function(e){var t=e.editor,n=e.changeStdinAction,a=t.stderr.length>0?t.stderr:t.stdout,r={color:t.stderr.length>0?"red":"black"};return o.a.createElement("div",{style:x},o.a.createElement("label",{for:"stdin"},o.a.createElement("b",null,"Input")),o.a.createElement(S,{id:"stdin",rows:9,value:t.stdin,onChange:function(e){return n(e.target.value)}}),o.a.createElement("label",{for:"stdout"},o.a.createElement("b",null,"Output")),o.a.createElement(S,{id:"stdout",rows:9,value:a,style:r,disabled:!0}))})),I=n(307),w=I.a.Option,G=function(e){var t=e.name,n=e.options,a=e.defaultValue,r=e.width,c=e.onChange,l={margin:"0 2px 0 2px",borderRadius:"0",border:"none",width:"".concat(r,"px")};return o.a.createElement(I.a,{name:t,defaultValue:a,style:l,onChange:c},n.map((function(e){return o.a.createElement(w,{value:e.value},e.name)})))},N=n(105),k=n(308),H=n(305),M=n(309),D=[{name:"Monokai",value:"monokai"},{name:"GitHub",value:"github"},{name:"Kuroir",value:"kuroir"},{name:"Xcode",value:"xcode"},{name:"TextMate",value:"textmate"},{name:"Solarized Dark",value:"solarized_dark"},{name:"Solarized Light",value:"solarized_light"}],L=[{name:"Java",value:"java"},{name:"Python",value:"python"},{name:"JavaScript",value:"javascript"}],z=[{name:12,value:12},{name:14,value:14},{name:16,value:16},{name:18,value:18},{name:20,value:20},{name:24,value:24},{name:28,value:28},{name:32,value:32},{name:36,value:36},{name:40,value:40}],R=Object(g.b)((function(e){return{editor:e.editor,socket:e.socket,room:e.room}}),{changeLanguageAction:function(e){return function(t){return t({type:"CHANGE_LANGUAGE",payload:e})}},changeThemeAction:function(e){return function(t){return t({type:"CHANGE_THEME",payload:e})}},changeFontAction:function(e){return function(t){return t({type:"CHANGE_FONT",payload:e})}},changeShowGutterAction:function(){return function(e){return e({type:"CHANGE_SHOW_GUTTER",payload:null})}},changeOpsToDefaultAction:function(){return function(e){return e({type:"CHANGE_OPS_TO_DEFAULT",payload:null})}}})((function(e){var t=e.editor,n=e.changeThemeAction,r=e.changeFontAction,c=e.changeLanguageAction,l=e.changeOpsToDefaultAction;return Object(a.useEffect)((function(){}),[t]),o.a.createElement("div",{style:{height:"40px",padding:"4px",backgroundColor:"#dedede",boxShadow:"0px 1px 4px 0px black",marginBottom:"10px"}},o.a.createElement(G,{name:"theme",options:D,defaultValue:t.theme,onChange:n}),o.a.createElement(G,{name:"mode",options:L,defaultValue:t.language,onChange:c}),o.a.createElement(G,{name:"fontSize",options:z,defaultValue:t.fontSize,onChange:r}),o.a.createElement(N.a,{type:"primary",style:{backgroundColor:"green",border:"none",margin:"0 2px 0 2px"},icon:o.a.createElement(k.a,null),onClick:function(){return null},loading:!1},"Run"),o.a.createElement(N.a,{type:"primary",style:{backgroundColor:"red",border:"none",margin:"0 2px 0 2px"},onClick:l},"Reset"),o.a.createElement("div",{style:{display:"inline",witdh:"auto",float:"right"}},o.a.createElement("div",{style:{display:"inline",lineHeight:"30px",marginRight:"5px"}},o.a.createElement(H.a,{style:{margin:"0 2px 0 2px"},size:25,icon:o.a.createElement(M.a,null)}),o.a.createElement("h4",{style:{display:"inline"}},"Mayank Raghuvanshi"))))})),U=n(33),V=Object(g.b)((function(e){return{}}),{initializeSocketAction:function(e){return function(t){t({type:"INITIALIZE_SOCKET",payload:e})}}})((function(e){var t=Object(a.useState)(!0),n=Object(f.a)(t,2),r=n[0],c=n[1],l=Object(U.g)().roomId,i=e.initializeSocketAction;return console.log(l),Object(a.useEffect)((function(){function e(){return(e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(C()("http://localhost:4000"));case 2:t(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(!0),function(t){e.apply(this,arguments)}(c)}),[l]),o.a.createElement("div",null,r?o.a.createElement("div",null,"Loading"):o.a.createElement("div",null,o.a.createElement(R,null),o.a.createElement("div",{style:{display:"flex",direction:"row",width:"100%",heght:"100vh"}},o.a.createElement(T,null),o.a.createElement(_,null))))})),F=n(99);var W=function(){return o.a.createElement(g.a,{store:h},o.a.createElement(F.a,{basename:""},o.a.createElement(U.d,null,o.a.createElement(U.b,{exact:!0,path:"/"},o.a.createElement(U.a,{to:"/".concat(Date.now())})),o.a.createElement(U.b,{exact:!0,path:"/:roomId"},o.a.createElement(V,null)))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.daf0652d.chunk.js.map