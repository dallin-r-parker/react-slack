import React from 'react';
import './AddImg.css';

export default function AddImg(props) {
  function initial() {
    let constraint = { audio: false, video: true };
    navigator.mediaDevices
      .getUserMedia(constraint)
      .then(mediaStream => {
        let video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.play();
      })
      .catch(err => console.log(`${err.name}: ${err.message}`));
  }
  initial();

  function takePhoto(e) {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    let w = canvas.width;
    let h = canvas.height;
    let v = document.querySelector('video');
    let p = document.querySelector('img');
    context.drawImage(v, 0, 0, w, h);
    const data = canvas.toDataURL('image/png');
    p.setAttribute('src', data);
    //    console.log('p: ', p);
    e.preventDefault();
  }

  return (
    <div className="add-img-modal">
      <div className="img-container">
        <h1>Update Profile Image</h1>
        <video classID="video" />
        <canvas classID="canvas" />
        <img src="" />
        <div className="btn-wrap">
          <button onClick={takePhoto}>Take Photo</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
