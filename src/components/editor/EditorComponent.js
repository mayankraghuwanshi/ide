import React, {useEffect, useState} from "react";
import EditorBodyComponent from "./EditorBodyComponent";
import StdIOComponent from "./StdIOComponent";
import EditorOpsComponent from "./EditorNavComponent";
import {useParams} from 'react-router-dom'


import io from 'socket.io-client'
import {connect} from "react-redux";
import {syncInitialStateAction} from "../../actions/editorAction";
import {initializeRoomAction} from "../../actions/roomAction";
import {JOIN_GROUP} from "../../socketConstants";
import {URL} from '../../url';

const EditorComponent = (props) => {
    const [loading , setLoading] = useState(true);
    const {roomId} = useParams();
    const {initializeRoomAction , syncInitialStateAction} = props;
    useEffect(()=>{
        setLoading(true);
        async function fetch(setLoading){
            const Socket = await io(URL);
            await initializeRoomAction(Socket , roomId);
            await syncInitialStateAction(roomId);
            Socket.emit(JOIN_GROUP , {roomId});
            setLoading(false);
        };
        fetch(setLoading);
    } , [roomId])
    return <div>
        {loading ? <div>Loading</div> : <div>
            <EditorOpsComponent/>
            <div style={{display : "flex" , direction : "row" , width : "100%" , heght : "100vh"}}>
                <EditorBodyComponent/>
                <StdIOComponent/>
            </div>
        </div>}

    </div>
}

const mapStateToProps = (state)=>({

})

export default connect(mapStateToProps , {initializeRoomAction , syncInitialStateAction})(EditorComponent);