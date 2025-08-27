import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { FaAngleDoubleLeft } from 'react-icons/fa'; // Optional: for a nice back icon

// Marker icon fixes
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function ViewMap() {
  const navigate = useNavigate();

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

    const map = L.map('map').setView([20.5937, 78.9629], 5); // Default: India

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
          L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup('You are here!')
            .openPopup();
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Could not fetch your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }

    return () => {
      map.remove();
    };
  }, []);

  // Back button handler
  const handleBack = () => {
    navigate('/AfterLoginPage'); // Change this path if needed
  };

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* Back Button */}
      <button
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          border: 'none',
          borderRadius: '5px',
          padding: '8px 12px',
          cursor: 'pointer',
          backgroundColor:"purple",
          color:"white"
        }}
      >
        <FaAngleDoubleLeft style={{ marginRight: '5px' }} />
        Back
      </button>

      {/* Map container */}
      <div id="map" style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
