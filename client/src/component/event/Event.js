import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../header/Navbar'
const Event = () => {
   const eventImageList=useSelector(state=>state.imageFile.eventImageList)
   const eventDesList=useSelector(state=>state.imageFile.eventDesList)
 
    return (
        
        <div>
           <Navbar></Navbar>
           <div className='text-center my-4' >
            <h1 className='my-4'>Event List</h1>
            <div>
               {
                  eventImageList &&  eventImageList.map((pd,index)=><div key={pd._id} class="card mb-3" style={{maxWidth:'1150px',marginLeft:'50px'}}>
                  <div class="row">
                    <div class="col-md-4">
                      <img src={pd.filePath} class="img-fluid" alt="..." />
                    </div>
                 <div class="col-md-8">
                    <div class="card-body">
                       {
                          eventDesList&&eventDesList.map((d,index1)=>index===index1 &&<h3 key={d._id} class="card-text">{d.des}</h3>)
                       }
                     
                </div>
             </div>
         </div>
      </div>)
               }
            </div>
 </div>
        </div>
    );
};

export default Event;