import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../reducer/action';
const Navbar = () => {
  const dispatch=useDispatch()
  
    return (
        <nav className="navbar navbar-light bg-light">
         <div className="container-fluid">
           <span className="navbar-brand mb-0 h1">Admin</span>
           <Link  onClick={()=>dispatch(logoutAction())} >Log-out</Link>
         </div>
      </nav>
    );
};

export default Navbar;