import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';


const LiveEditor = (props)=>{
    const {roomId}  = useParams();
    const {editor} = props;
    return <div>
        {roomId}
    </div>
}

const mapStateToProps = (state)=>({
    editor : state.editor
})
export default connect(mapStateToProps)(LiveEditor)