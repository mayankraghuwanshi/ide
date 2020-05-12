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
    const [loading , setLoading] = useState(true);
    const {roomId} = useParams();
    const {initializeSocketAction} = props;

    console.log(roomId);
    useEffect(()=>{
        setLoading(true);
        async function fetch(setLoading){
            await initializeSocketAction(io(URL));
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

export default connect(mapStateToProps , {initializeSocketAction})(EditorComponent);