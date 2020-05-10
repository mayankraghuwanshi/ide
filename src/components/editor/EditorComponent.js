import React, {useEffect} from "react";
import EditorBodyComponent from "./EditorBodyComponent";
import StdIOComponent from "./StdIOComponent";
import {initialiseSocketAction} from '../../actions/roomAction'
import EditorOpsComponent from "./EditorNavComponent";


const EditorComponent = () => {
    return <div>
        <EditorOpsComponent/>
        <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
            <EditorBodyComponent/>
            <StdIOComponent/>
        </div>
    </div>
}



export default EditorComponent