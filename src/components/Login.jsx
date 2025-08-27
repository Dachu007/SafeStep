import React from "react";
import { FaAngleDoubleLeft,FaEnvelope,FaLock  } from 'react-icons/fa';
import "../index.css";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';




export default function Login() {
   const navigate = useNavigate();
   const handleBackToLaunchPage = () =>
    {
        navigate("/");
    };
     const handleLoginPage = () =>
    {
        navigate("/AfterLoginPage");
    };
  return (
   <div className="vh-100 vw-100 fullscreen-background  object-cover" >
        <div className="ms-5">
                <FaAngleDoubleLeft size={'50'} className="text-purple" onClick={handleBackToLaunchPage}/>
    </div>
         <div >
            <div className="container  mt-5">
              <h1 className="text-white text-center">Welcome</h1>
                     {/* Email Input */}
                    <div className="d-flex justify-content-center mb-3">
                     <div className="input-group-custom">
                        <FaEnvelope className="icon-left" />
                        <input
                        type="email"
                        placeholder="Email Address"
                        className="input-custom"
                        />
                    </div>
                    </div> 
                   
                    {/* Password Input */}
                   <div className="d-flex justify-content-center mb-3">
                    <div className="password-custom text-center">
                        <FaLock className="password-icon-left" />
                        <input
                        type="password"
                        placeholder="Password"
                        className="password"
                        />
                        <AiOutlineEye className="password-icon-right" />
                    </div>
                    </div>
                    {/* Remember Me */}
                    <div className="d-flex justify-content-start justify-content-md-center mb-3">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember" className="remember-label">
                        Remember for 30 days
                        </label>
                    </div>
                    {/* Login Button */}
                    <div className="text-center">
                      <button className="login-button text-center" onClick={handleLoginPage}>LOG IN</button>
                    </div>

                    {/* Forgot Password */}
                    <div className="forgot">
                        <a href="#">Forgot Password?</a>
                    </div>

                    {/* Sign up */}
                    <div className="signup">
                        <span>Don’t have an account? </span>
                        <a href="#">Sign up</a>
                    </div>                  
            </div>
         </div>
    </div>
    
  );
}