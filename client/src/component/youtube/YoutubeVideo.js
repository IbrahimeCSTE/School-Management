import React from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom'
import Bounce from "react-reveal/Bounce";
const YoutubeVideo = () => {
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
          <h1 className='Memorize'>Memorize Day</h1>
          <Bounce left>
            <div >
              {
                  videoList1.vl?<div className='row mt-5 ml-5 mr-5 mb-2'>
                  <div className='col-md-3'>
                  <YouTube videoId={videoList[0]?videoList[0].id:''} opts={opts} onReady={onReady}  />
                  </div>
                  <div className='col-md-3'>
                  <YouTube videoId={videoList[1]?videoList[1].id:''} opts={opts} onReady={onReady}  />
                  </div>
                  <div className='col-md-3'>
                  <YouTube videoId={videoList[2]?videoList[2].id:''} opts={opts} onReady={onReady}  />
                  </div>
                  <div className='col-md-3'>
                  <YouTube videoId={videoList[3]?videoList[3].id:''} opts={opts} onReady={onReady}  />
                  </div>
              </div>:<h1 className='text-center mt-5'>No video</h1>
              }
             <div className='mb-5 text-center'>
             <Link className='btn btn-primary btn-sm' to='/videoList'>see more</Link>           
                 
             </div>           
        </div>
        </Bounce>
        </div>
    );
};

export default YoutubeVideo;