import React, { useState } from 'react';
import "../index.css";
import { FaAngleDoubleLeft,FaEnvelope,FaLock  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



export default function EditPhoneNo() {
  const [contacts, setContacts] = useState([]);

  const handlePickContacts = async () => {
    try {
      // Check if browser supports it
      if (!('contacts' in navigator && 'ContactsManager' in window)) {
        alert("This browser doesn't support the Contact Picker API.");
        return;
      }

      const props = ['name', 'tel'];
      const opts = { multiple: true };

      const selectedContacts = await navigator.contacts.select(props, opts);
      console.log('Selected:', selectedContacts);
      setContacts(selectedContacts);
      localStorage.setItem('familyContacts', JSON.stringify(selectedContacts));
      navigate('/viewContacts', { state: { contacts: selected } });
    } catch (error) {
      console.error('Contact Picker error:', error);
    }
  };
   const navigate = useNavigate();
   const handleBackToLaunchPage = () =>
    {
        navigate("/AfterLoginPage");
    };

  return (
 <div className="vh-100 vw-100 fullscreen-background object-cover ">
        <div className="ms-5">
                    <FaAngleDoubleLeft size={'50'} className="text-purple" onClick={handleBackToLaunchPage}/>
        </div>
  <div className="text-center">
    <div className="container  mt-5">
              <h1 className="text-white text-center">Get mobile Number</h1>
               <button className=" login-button text-center mt-3" onClick={handlePickContacts}>
      Pick Contacts
    </button>

    <ul className="mt-4 text-white">
      {contacts.map((c, index) => (
        <li key={index}>
          {c.name?.[0] || 'Unnamed'} — {c.tel?.[0] || 'No number'}
        </li>
      ))}
    </ul>
    </div>          

   
  </div>
</div>

 
  );
}
