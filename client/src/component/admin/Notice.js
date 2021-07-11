import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { noticeAction } from '../../reducer/action';
const Notice = () => {
    const isNotice=useSelector(state=>state.notice.isNotice)
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [notice,setNotice]=useState('')
    const [author,setAuthor]=useState('')
    const [atPublish,setAtPublish]=useState('')
    const submitHandle=(e)=>{
        e.preventDefault()
        const noticeData={
            title,notice,author,atPublish
        }
        dispatch(noticeAction(noticeData))
        
    }
    return (
        <div>
            {
                isNotice? <div className='successIcon'><i className='fa fa-5x fa-check-circle'></i><h2>Success</h2></div> :<div>
                <h2 className="ml-5 mt-5">NOTICE</h2>
                <hr />
                <form className="notice" onSubmit={submitHandle}>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" /><br />
                    <textarea type="text" value={notice} onChange={(e)=>setNotice(e.target.value)} placeholder="notice" /><br />
                    <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="author name" /><br />
                    <input type="text" value={atPublish} onChange={(e)=>setAtPublish(e.target.value)} placeholder="dd/mm/yyyy" /><br />
                   <button className="btn btn-primary">Submit</button>
                </form>
            </div>
            }
        </div>
    );
};

export default Notice;