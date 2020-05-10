import React, {useEffect} from "react";
import EditorBodyComponent from "./EditorBodyComponent";
import StdIOComponent from "./StdIOComponent";
import {connect} from "react-redux";
import io from "socket.io-client"
import {useParams} from "react-router-dom"
import {initialiseSocketAction} from '../../actions/socketAction'
import EditorOpsComponent from "./EditorNavComponent";


const EditorComponent = (props) => {
    const {room} = props;
    const {initialiseSocketAction} = props;
    const {id} = useParams()
    console.log(id);
    useEffect(()=>{
        if(room.broadcastMode){
            const Socket = io.connect("http://localhost:4000");
            initialiseSocketAction(Socket);
        }






    } , [room])
    return <div>
        <EditorOpsComponent/>
        <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
            <EditorBodyComponent/>
            <StdIOComponent/>
        </div>
    </div>
}

const mapStateToProps = (state)=>({
  room : state.room,
  socket : state.socket
})

export default connect(mapStateToProps , {initialiseSocketAction})(EditorComponent)