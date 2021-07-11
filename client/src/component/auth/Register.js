import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../reducer/action";
import Navbar from "../header/Navbar";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stuId,setStuId] = useState("");
  const auth = useSelector((state) => state.auth);
  const error = useSelector((state) => state.res.error);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(registerAction({name,email,stuId,password}));
  }  

  if(auth.isAuth){
     return <Redirect to='/' />
  }
  return (
   <div>
     <Navbar></Navbar>
      <section className="container mt-5">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>

      <div>
        {
          error&&(<div className="alert alert-warning alert-dismissible fade show" role="alert">
               
               <strong>email already axits or wrong password </strong>
               
               <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
             </button>
              </div>)
        }
      </div>
      
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name={name}
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name={email}
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="StuId"
            name={stuId}
            onBlur={(e) => setStuId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name={password}
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
   </div>
  );
};
export default Register;
