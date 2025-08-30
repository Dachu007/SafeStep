import { useState } from 'react';
import './App.css';
import Lanuch from './components/lanuch';
import Login from './components/Login';
import SoS from './components/SoS';
import EditPhoneNo from './components/EditPhoneNo' ;
import Contacts from "./components/Contacts";
import ViewMap from "./components/ViewMap";
import 'leaflet/dist/leaflet.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    
   <Router basename="/SafeStep">
   
    <Routes>
      <Route path='/'element={<Lanuch />}></Route>
      <Route path='/signin'element={<Login />}></Route>
      <Route path='/AfterLoginPage'element={<SoS />}></Route>
      <Route path='/editPhoneNumber'element={<EditPhoneNo />}></Route>
      <Route path="/viewContacts" element={<Contacts />} />
      <Route path="/viewMapForSS" element={<ViewMap />} />




    </Routes>
   </Router> 
      
  )
}

export default App
