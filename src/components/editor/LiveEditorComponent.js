import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {initializeConnectionAction} from "../../actions/editorAction";
import EditorComponent from "./EditorComponent";




const LiveEditor = (props)=>{
    const {roomId}  = useParams();
    const [loading , setLoading] = useState(true)
    const {initializeConnectionAction} = props;
    useEffect(()=>{
        setLoading(true);
        initializeConnectionAction(roomId);
        setLoading(false);
    },[roomId])
    return <div>
        {loading ? <h1>Loading</h1> : <EditorComponent/>}

    </div>
}

const mapStateToProps = (state)=>({

})
export default connect(mapStateToProps , {initializeConnectionAction})(LiveEditor)