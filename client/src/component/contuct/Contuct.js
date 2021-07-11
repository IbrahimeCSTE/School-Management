import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contuctAction } from "../../reducer/action";
import Navbar from "../header/Navbar";
const Contuct = () => {
  const dispatch=useDispatch()
  const contuct=useSelector(state=>state.contuct)
  const auth=useSelector(state=>state.auth.auth)
  const {send}=contuct
  const[email,setEmail]=useState(auth.email)
  const[subject,setSubject]=useState('')
  const[message,setMessage]=useState('')
 
  const submitHandle=(e)=>{
    e.preventDefault()
    dispatch(contuctAction(email,subject,message))
  }
  return (
   <div>
       <Navbar></Navbar>
        <section id="contuct" className="contact my-5 py-5">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h5 className="text-primary">Contact</h5>
          <h1>Always connect with us</h1>
        </div>
        <div>
        {
         send&&(<div className="alert alert-warning alert-dismissible fade show" role="alert">
               
               <strong>Send message succesfully</strong>
               
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
             </button>
              </div>)
        }
      </div>
        <div className="col-md-9 mx-auto">
          <form className="contuctForm" onSubmit={submitHandle}>
            <div className="form-group">
              <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
                placeholder="Email Address *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                onChange={(e)=>setSubject(e.target.value)}
                className="form-control"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                onChange={(e)=>setMessage(e.target.value)}
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
                required
              ></textarea>
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
           
          </form>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Contuct;
