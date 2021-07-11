import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
 
  
  return (
    <footer className="footer-area clear-both">
      <div className="container">
        <div className="row ">
            <div className='col-md-4'>
              <h3>Add Us</h3>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="/facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            </div>
            <div className='col-md-4'>
               <h3>Address</h3>
               <p>Mashundia Bazar</p>
               <p>Postal Code 6682</p>
               <p>Aminpur,Pabna</p>

            </div>

            <div className='col-md-4'>
               <h3>Have us</h3>
               <p>Library</p>
               <p>IT center</p>
               <p>Lab</p>

            </div>
        </div>
        <div className="copyRight text-center">
          <p>Copyright  All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
