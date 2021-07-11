import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../header/Navbar';
const Notice = (props) => {
    const noticeList=useSelector(state=>state.notice.noticeList)
    const eventList=()=>{
       
         props.history.push('/event')
    }
    return (
        <div>
            <Navbar></Navbar>
            <button className='btn btn-info my-5 ml-5' onClick={eventList}>Event List</button>
           <div>
               {
                   
                   noticeList.length>0? noticeList.map((pd)=> <div key={pd._id} className="card text-center container mt-5">
                    <div className="card-header">
                         <h4>{pd.title}</h4>  
                   </div>
                  <div className="card-body">
                     <h6 className="card-text">{pd.notice}</h6>
                 </div>
                 <div className=" text-muted">
                   <small>{pd.atPublish}</small>
                 </div>
            </div>):<div className="alert alert-warning alert-dismissible fade show" role="alert">   
               <h1 className='text-center mt-5'>No Notice </h1>
              </div>
               }
           </div>
    </div>
    );
};

export default Notice;