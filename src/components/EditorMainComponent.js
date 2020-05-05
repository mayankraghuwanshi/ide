import React, {useEffect} from "react";
import EditorComponent from "./EditorComponent";
import StdIOComponent from "./StdIOComponent";
import {connect} from "react-redux";
import io from "socket.io-client"
import {URL} from '../constants';
import {initialiseSocketAction} from '../actions/socketAction'

const EditorMainComponent = (props)=>{
    const {room} = props;
    const {initialiseSocketAction} = props;
    useEffect(()=>{
        if(room.broadcastMode){
            const socket = io.connect("http://localhost:4000");
            initialiseSocketAction(socket);

        }
    } , [room])
    return <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
        <EditorComponent/>
        <StdIOComponent/>
    </div>
}

const mapStateToProps = (state)=>({
  room : state.room
})

export default connect(mapStateToProps , {initialiseSocketAction})(EditorMainComponent)