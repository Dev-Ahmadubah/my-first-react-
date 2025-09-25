import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img 
          src={image} 
          alt={`${name}'s profile`} 
          className="profile-image"
        />
      </div>
      <div className="profile-content">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;