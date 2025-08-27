import React from "react";
import bg from "../assets/BackGroundPage.png"; 
import logo from "../assets/SafeStepLogoTrans.png";
import { FaEnvelope, FaMobileAlt } from "react-icons/fa";
import "../index.css"; 
import { useNavigate } from 'react-router-dom';



export default function Lanuch() 
{
  const navigate = useNavigate();
  const handleSignInClick = () =>
  {
    navigate("/signin");
  };
  return (
    <div className="vh-100 vw-100 fullscreen-background  object-cover" >
      <div className="mt-4 text-center">
       <img src={logo} alt="Logo"  className="logoStyle"/>
      </div>
      <div className="d-flex justify-content-start align-items-center flex-column">
        <h1 className="text-purple">Safestep</h1>
        <h5 className="small fst-italic text-white mb-5">"Safe Navigate, Strong Women"</h5>
      <div className="text-center">
        <div className="col-12">
        <button className=" btn-gradient  mb-2" style={{marginTop:"200px"}} onClick={handleSignInClick}>SIGN IN</button>
        </div>
        <h6 className="text-white small fst-italic mt-2">OR SIGN IN WITH</h6>
        <hr className="bg-white" />
        <div className="icon-circle">
            <FaEnvelope size={16} color="white" />
        </div>
       <div className="ms-2 icon-circle" >
        <FaMobileAlt size={20} color="white" />
       </div> 
      </div>
      </div> 
      <div  className="mt-5 line-before-span"/>
      <div className="mt-5 text-center">
         <span className="small fst-italic text-white mt-5 me-2">DIDN'T Have  ACCOUNT?</span>
         <br/>
         <span className="small fst-italic text-purple" style={{ cursor: "pointer"}}>SIGN UP NOW</span>
        </div>
    </div>
    
  );
}