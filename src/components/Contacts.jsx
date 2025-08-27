import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';

export default function ContactListPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const contacts = location.state?.contacts || [];

  const handleBack = () => navigate('/editPhone');

  return (

     <div className="vh-100 vw-100 fullscreen-background object-cover ">
          <div className="p-4 text-white">
      <FaAngleDoubleLeft size={30} onClick={handleBack} />
      <h2 className="mt-3">Selected Contacts</h2>
      <ul className="mt-4">
        {contacts.map((c, index) => (
          <li key={index}>
            {c.name?.[0] || 'Unnamed'} — {c.tel?.[0] || 'No number'}
          </li>
        ))}
      </ul>
    </div>

     </div>
  
  );
}
