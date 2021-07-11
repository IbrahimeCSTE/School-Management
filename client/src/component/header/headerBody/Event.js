import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Event = () => {
    const eventImageList=useSelector(state=>state.imageFile.eventImageList)
    const eventDesList=useSelector(state=>state.imageFile.eventDesList)
    return (
        <div>
            <div className='text-center my-4' >
            <h1 className='my-4'>Event List</h1>
            <div>
               {
                  eventImageList &&  eventImageList.map((pd,index)=>index===0&&<div key={pd._id} class="card mb-3" style={{maxWidth:'1150px',marginLeft:'50px'}}>
                  <div class="row">
                    <div class="col-md-6">
                      <img src={pd.filePath} class="img-fluid" alt="..." />
                    </div>
                 <div class="col-md-6">
                    <div class="card-body">
                       {
                          eventDesList&&eventDesList.map((d,index1)=>index1===0 &&<h3 key={d._id} class="card-text">{d.des}</h3>)
                       }
                     
                </div>
             </div>
         </div>
      </div>)
               }
            </div>
         </div>
           <div className='text-center'>
           <Link className='text-center btn btn-info btn-sm my-4' to='/event'>More event</Link>
           </div>
        </div>
    );
};

export default Event;