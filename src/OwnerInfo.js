import React from 'react';
import './OwnerInfo.css';

const OwnerInfo = ({ owners }) => {
  return (
    <div className="owners-container">
      {owners.map((owner, index) => (
        <div className="owner-info" key={index}>
          <img
            src={owner.photo} 
            alt={`Owner ${index + 1}`}
            className="owner-photo"
          />
          <h2 className="owner-name">{owner.name}</h2>
          <p className="owner-role">{owner.role}</p>
        </div>
      ))}
    </div>
  );
};

export default OwnerInfo;