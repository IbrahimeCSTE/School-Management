import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Fade from 'react-reveal/Fade'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction, updateUser } from "../../reducer/action";
const Profile = (props) => {
    const dispatch=useDispatch()
    const Auth=useSelector(state=>state.auth.auth)
    const isAuth=useSelector(state=>state.auth.isAuth)
    const [uname, setName] = useState("");
    const [uemail, setEmail] = useState("");
    const [upassword, setPassword] = useState("");
    const [ustuId,setStuId] = useState("");
    const [updateAuth,setUpdateAuth]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData={
            uname,uemail,ustuId,upassword
        }
        dispatch(updateUser(updateData,Auth))
      }  

    if(!isAuth){
        props.history.push('/login')
    }
    return (
        <div className=''>
          <Navbar></Navbar>
          <h1 className='text-center mt-4'>Student Profile</h1>
            <hr className='mb-5' />
            <div className='profile'>
            <div className='row'>
            <div className='col-md-7'>
             {
                 Auth?<div className='card'>
                     <h3>Name:{Auth.name}</h3>
                     <h3>Email:{Auth.email}</h3>
                     <h3>Student Id:{Auth.stuId}</h3>
                   <button className='btn btn-danger btn-sm' onClick={()=>dispatch(logoutAction())}>
                     Logout
                  </button>
                  <button onClick={()=>setUpdateAuth(!updateAuth)} className='my-2 btn btn-info btn-sm'>
                     update
                  </button>
                 </div>:<h1 className='text-center' style={{color:'red'}}>No Profile Find</h1>
             }
             </div>
             <div className='col-md-5'>
             {
                 updateAuth&&<Fade right >
        <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onBlur={(e) => setName(e.target.value)}
            placeholder='name'
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            onBlur={(e) => setEmail(e.target.value)}
            placeholder='email'
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onBlur={(e) => setStuId(e.target.value)}
            placeholder='stuId'
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            onBlur={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
        </div>
        <input type="submit" className="btn btn-primary" value="submit" />
      </form>
                </Fade>
             }
             </div>
             </div>
            </div>
        </div>
    );
};

export default Profile;