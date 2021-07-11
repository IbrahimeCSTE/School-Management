import React from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import Navbar from "../header/Navbar";
const VideoList = () => {
    const videoList1=useSelector(state=>state.youtube)
      const{videoList}=videoList1
    const onReady=(e)=> {
        e.target.pauseVideo();
      }
   
        const opts = {
            height: '200',
            width: '300',
            playerVars: {
              autoplay: 0,
            },
          };
     
 
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-center mt-5'>Video List</h1>
            <div className='row mt-5 ml-5 mr-5 mb-2' >
              {
                  videoList1.vl?videoList.map((pd)=><div key={pd._id} className='col-md-3'>
                  <YouTube videoId={pd.id} opts={opts} onReady={onReady}  />            
              </div>):<h1 className='text-center mt-5'>No video</h1>
              }        
        </div>
        </div>
    );
};

export default VideoList;