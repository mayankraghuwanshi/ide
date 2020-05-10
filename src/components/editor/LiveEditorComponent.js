import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {initialiseSocketAction} from "../../actions/roomAction";


const LiveEditor = (props)=>{
    const {roomId}  = useParams();
    const {editor} = props;
    const {initialiseSocketAction} = props;
    const {room} = props;
    useEffect(()=>{
        if(room.liveMode){
            // const socket = io
            // initialiseSocketAction();
        }
    },[roomId])
    return <div>
        {roomId}
    </div>
}

const mapStateToProps = (state)=>({
    editor : state.editor,
    room : state.room
})
export default connect(mapStateToProps , {initialiseSocketAction})(LiveEditor)