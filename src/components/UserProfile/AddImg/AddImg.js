import React from 'react';
import './AddImg.css';

export default function AddImg(props) {
  return (
    <div className="add-img-modal">
      <div className="img-container">
        <h1>Update Profile Image</h1>
        <video />
        <canvas />
        <div className="btn-wrap">
          <button>Take Photo</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
