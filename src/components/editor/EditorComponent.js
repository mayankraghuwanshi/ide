import React, {useEffect, useState} from "react";
import EditorBodyComponent from "./EditorBodyComponent";
import StdIOComponent from "./StdIOComponent";
import EditorOpsComponent from "./EditorNavComponent";
import {useParams} from 'react-router-dom'

import io from 'socket.io-client'
import {connect} from "react-redux";
import {initializeSocketAction} from "../../actions/editorAction";
const URL = "http://localhost:4000"

const EditorComponent = (props) => {
    const {roomId} = useParams();
    const {initializeSocketAction} = props;
    console.log(roomId);
    useEffect(()=>{
        initializeSocketAction(io(URL));
    } , [roomId])
    return <div>
        <EditorOpsComponent/>
        <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
            <EditorBodyComponent/>
            <StdIOComponent/>
        </div>
    </div>
}

const mapStateToProps = (state)=>({

})

export default connect(mapStateToProps , {initializeSocketAction})(EditorComponent);