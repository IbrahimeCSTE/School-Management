import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const Notice = () => {
    const noticeList=useSelector(state=>state.notice.noticeList)
    return (
        <Zoom>
            <div className='HeaderNotice'>
            <h1>Notice</h1>
            <div>
               {
                  noticeList.length>0? 
                  (<div className="card text-center container mt-5">
                    <div className="card-header">
                         <h4>{noticeList[0].title}</h4>  
                   </div>
                  <div className="card-body">
                     <h6 className="card-text">{noticeList[0].notice}</h6>
                 </div>
                 <div className=" text-muted">
                   <small>{noticeList[0].atPublish}</small>
                 </div>
            </div>):<div className="alert alert-warning alert-dismissible fade show" role="alert">   
               <h1 className='text-center mt-5'>No Notice </h1>
              </div>
               }
           </div>
          <Link className='btn btn-info my-4' to='/notice'>More Notice</Link>
        </div>
        </Zoom>
    );
};

export default Notice;