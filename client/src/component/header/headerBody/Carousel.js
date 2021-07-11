import React from 'react';
import Fade from 'react-reveal/Fade'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
const CarouselSlide = () => { 
  const imageList=useSelector(state=>state.imageFile.imageList)
  const desList=useSelector(state=>state.imageFile.desList)

    return (
        <Carousel  className='carousal'>
          {
            imageList&&imageList.map((file,index)=>
            <div key={file._id} className="cardCarousal">
            <div className="row">
              <Fade top>
                <div className="col-md-6">
                  <img src={file.filePath} height="200" className="card-img-top img-responsive" alt="img" />
                </div>
              </Fade>
              <Fade bottom>
              <div className="col-md-6">
              <div className="card-body">
                  {
                    desList&&desList.map((pd,index1)=>index===index1&&<p key={pd._id} className="card-text">{pd.des}</p>)
                  }
                </div>
              </div>
              </Fade>
          </div>
       </div>)
          }
      </Carousel>
    );
};

export default CarouselSlide ;