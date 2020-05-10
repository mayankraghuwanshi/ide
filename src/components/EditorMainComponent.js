import React, {useEffect , useState} from "react";
import EditorComponent from "./EditorComponent";
import StdIOComponent from "./StdIOComponent";
import {connect} from "react-redux";
import io from "socket.io-client"
import {URL} from '../constants';
import {initialiseSocketAction} from '../actions/socketAction'

const EditorMainComponent = (props) => {
    const {room} = props;
    const {initialiseSocketAction} = props;
    const {socket} = props;
    useEffect(()=>{
        if(room.broadcastMode){
            const Socket = io.connect("http://localhost:4000");
            initialiseSocketAction(Socket);
        }






    } , [room])
    return <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
        <EditorComponent/>
        <StdIOComponent/>
    </div>
}

const mapStateToProps = (state)=>({
  room : state.room,
  socket : state.socket
})

export default connect(mapStateToProps , {initialiseSocketAction})(EditorMainComponent)