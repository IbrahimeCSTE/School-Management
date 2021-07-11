import React, { useState } from 'react';
import getYoutubeId from 'get-youtube-id';
import {useDispatch, useSelector} from 'react-redux'
import { videoAction,deleteVideoAction} from '../../reducer/action';
const YoutubeVideo = () => {
    const dispatch=useDispatch()
    const videoList1=useSelector(state=>state.youtube)
    const {videoList,get}=videoList1
    const [id,setId]=useState('')
    const submitHandle=(e)=>{
    e.preventDefault()
    dispatch(videoAction(id))
    }

    return (
        <div>
            <form className='videoList' onSubmit={submitHandle}>
                <input type="text" onChange={(e)=>setId(getYoutubeId(e.target.value)) } placeholder='Video Url' required/>
                <button className='btn btn-info'>Submit</button>
            </form>
            <div>{
            get&&<div className='successIcon'><i className='fa fa-5x fa-check-circle'></i><h2>Success</h2></div>
            }
            </div>
            <div className="List">
                <h1>Video List</h1>
                <div className='showList'>
                    {
                       videoList1.vl? videoList.map((pd)=><div key={pd._id}>
                           <h4>{pd.id}</h4>
                           <button onClick={()=>dispatch(deleteVideoAction(pd))} className='btn btn-danger btn-sm'>delete</button>
                       </div> ):' '
                    }
                </div>
            </div>

        </div>
    );
};

export default YoutubeVideo;