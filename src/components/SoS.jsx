import React from 'react'
import { FaAngleDoubleLeft,FaEnvelope,FaLock  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "../index.css";
import swal from 'sweetalert';


export default function SoS() {
    const navigate = useNavigate();
       const handleBackToLaunchPage = () =>
        {
            navigate("/");
        };
        const handleSOSButton = () =>
        {
             swal('Emergency Alert sent!','', 'warning');
        }
        const handlePoliceBtn = () =>
        {
        swal({
                title: 'Call Police: 108?',
                text: 'Are you sure you want to make this call?',
                icon: 'warning',
                buttons: ['Cancel', 'Call'],
            }).then((willCall) => {
                if (willCall) {
                window.location.href = 'tel:100';
                }
            });
        }
        const handleWomenHelpLineBtn = () =>
        {
        swal({
            title: 'Women Safety Helplines',
            content: {
                element: "div",
                attributes: {
                innerHTML: `
                    NCW 24×7 Women Helpline → <strong>7827170170</strong><br/>
                    Emergency Response Support System → <strong>112</strong><br/>
                        National Women Helpline Number → <strong>181</strong><br/>
                    National Child Helpline Number → <strong>1098</strong><br/>
                    Cyber Crime Helpline → <strong>1930</strong><br/>
                `
                }
            },
            icon: 'info',
            });

        }

        const handleEditPhoneNumber =() =>
        {
           navigate("/editPhoneNumber");
        }
        const handleFamilyBtn = () => {
  const stored = localStorage.getItem('familyContacts');
  if (!stored) {
    swal("No contacts found. Please pick contacts first.");
    return;
  }

  const contacts = JSON.parse(stored);
  const formatted = contacts.map(
    (c) => `${c.name?.[0] || 'Unnamed'} — ${c.tel?.[0] || 'No number'}`
  ).join('\n');

  swal({
    title: "Family Contacts",
    text: formatted,
    icon: "info",
  });
};
const handleOthersBtn = () => {
  navigate('/viewMapForSS');
};
        
  return (
    <div className="vh-100 vw-100 fullscreen-background  object-cover" >
      <div className="ms-5">
        <FaAngleDoubleLeft size={'50'} className="text-purple"  onClick={handleBackToLaunchPage}/>
     </div>
     <div>
      
      <div className="sos-section">
        <h1 class="text-white">Emergency</h1>
        <button className="sos-button" onClick={handleSOSButton}>
          SOS
        </button>
        <p class="text-white">Press the button to send SOS</p>
      </div>
      <div className="button-grid">
        <button className="action-button" onClick={handlePoliceBtn}>👮 Police</button>
        <button className="action-button" onClick={handleWomenHelpLineBtn}>👩‍🦰 Women Helpline</button>
        <button className="action-button" onClick={handleFamilyBtn}>👨‍👩‍👧 Family</button>
        <button className="action-button"onClick={handleOthersBtn}>📞 Others</button>
      </div>

      <div className="edit-button-wrapper">
        <button className="edit-button" onClick={handleEditPhoneNumber}>Edit ➔</button>
      </div>


     </div>
    </div>    
  )
}
