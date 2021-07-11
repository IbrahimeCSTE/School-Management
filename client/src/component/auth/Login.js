import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginAction, loginAction } from "../../reducer/action";
import Navbar from "../header/Navbar";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const auth = useSelector((state) => state.auth);
  const isAdmin = useSelector((state) => state.admin.isAdmin);
  const error = useSelector((state) => state.res.error);
   const{isAuth}=auth
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
       if(email==='admin@gmail.com' && password==='mbhs12345')
       dispatch(adminLoginAction({ email, password }));
 
       else{
      dispatch(loginAction({ email, password }));
       }
       
    
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  if (isAdmin) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <Navbar></Navbar>
      <section className="container mt-5">
      <h1 className="large text-primary">Login</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <h5 className='mb-3'>If you want to see admin panel?<br /><small>Email:admin@gmail.com</small><br /><small>Password:mbhs12345</small></h5>
      <div>
        {
         (auth.authError || error)&&(<div className="alert alert-warning alert-dismissible fade show" role="alert">
               
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
            type="email"
            placeholder="Email Address"
            name={email}
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name={password}
            onBlur={(e) => setPassword(e.target.value)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Log in" />
      </form>
      <p className="my-1">
        New User? <Link to="/register">Register</Link>
      </p>
    </section>
    </div>
  );
};

export default Login;
