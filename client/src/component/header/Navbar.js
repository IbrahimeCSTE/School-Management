import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
const Navbar = (props) => {
const isAdmin=useSelector(state=>state.admin.isAdmin)
const isAuth=useSelector(state=>state.auth.isAuth)
const Auth=useSelector(state=>state.auth.auth)
const [profile,setProfile]=useState(false)

const beforeLogIn=(<ul className="navbar-nav ml-auto">
<li className="nav-item active">
  <Link className="nav-link mr-5 text-white" to="/">
    Home
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/notice">
    Notice
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/result">
   Result
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/contuct">
    Contact Us
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/login">
   Login
  </Link>
</li>
</ul>)


const afterLogIn=(<ul className="navbar-nav ml-auto">
<li className="nav-item active">
  <Link className="nav-link mr-5 text-white" to="/">
    Home
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/notice">
    Notice
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/result">
   Result
  </Link>
</li>
<li className="nav-item">
  <Link className="nav-link mr-5 text-white" to="/contuct">
    Contact Us
  </Link>
</li>
<li className="nav-item">
  <Link to='/profile' className="nav-link mr-5 text-white" onClick={()=>setProfile(!profile)} >
   {
   Auth&&<strong className='circle'>{Auth.name}</strong>
    
   }
  </Link>
</li>
</ul>)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <Link style={{fontSize:'30px',textDecoration:'none'}} to="/">MBHS</Link>
      {
        isAdmin ? <Dashboard />:isAuth?afterLogIn:beforeLogIn
      }
    </div>
  </nav>
     
    </div>
  );
};

export default Navbar;
