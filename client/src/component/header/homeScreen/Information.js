import React from 'react';
import Fade from "react-reveal/Fade";
const Information = () => {
    return (
            <div className="information">
            <h1 className='informationHeading'>Information</h1>
            <div className=" row">
                <Fade left>
                <div className='col-md-4 mt-5'>
                    <i className='fa fa-3x fa-building'></i>
                    <h6>Class Room</h6>
                    <h3>20</h3>
                </div>
                </Fade>
               
                <Fade top>
                <div className='col-md-4 mt-5'>
                <i className='fa fa-3x fa-users '></i>
                    <h6>Students</h6>
                    <h2>4000</h2>
                </div>
                </Fade>
                <Fade right>
                <div className='col-md-4 mt-5'>
                <i className='fa fa-3x fa-user-graduate'></i>
                    <h6>teachers</h6>
                    <h3>25</h3>
                </div>
                </Fade>

            </div>
        </div>
        
    );
};

export default Information;