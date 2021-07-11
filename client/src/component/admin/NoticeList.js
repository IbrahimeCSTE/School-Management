import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNotice, updateNotice } from '../../reducer/action';
const NoticeList = () => {
    const noticeList=useSelector(state=>state.notice.noticeList)
    const dispatch=useDispatch()
    const [utitle,setTitle]=useState('')
    const [unotice,setNotice]=useState('')
    const [uauthor,setAuthor]=useState('')
    const [uatPublish,setAtPublish]=useState('')

    const submitHandle=(e,pd)=>{
        e.preventDefault()
        const updateData={
            utitle,unotice,uauthor,uatPublish
        }
        dispatch(updateNotice(updateData,pd))
             
    }
  
    return (
        <div>
        {
            
            noticeList&& noticeList.map((pd)=>
             <div key={pd._id} className="card text-center container mt-5">
                <div className="card-header">
                    <h4>{pd.title}</h4> 
                    <button onClick={()=> dispatch(deleteNotice(pd))} className="btn btn-danger  btn-sm mr-2">Delete</button> 
                    <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal">
                      Update
                    </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                 <div className="modal-dialog" role="document">
                  <div className="modal-content">
                   <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Notice Update</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    
                      <div className="modal-body">
                      <form className="notice" onSubmit={(e)=>submitHandle(e,pd)}>
                         <input type="text" value={utitle} onChange={(e)=>setTitle(e.target.value)} placeholder="title" /><br />
                         <textarea type="text" value={unotice} onChange={(e)=>setNotice(e.target.value)} placeholder="notice" /><br />
                         <input type="text" value={uauthor} onChange={(e)=>setAuthor(e.target.value)} placeholder="author name" /><br />
                         <input type="text" value={uatPublish} onChange={(e)=>setAtPublish(e.target.value)} placeholder="dd/mm/yyyy" /><br />
                         <button className="btn btn-primary">Submit</button>
                      </form>
                      </div>
                      
                   
                </div>
            </div>
            </div>
                </div>
             </div>)
        }
    </div>
    );
};

export default NoticeList;