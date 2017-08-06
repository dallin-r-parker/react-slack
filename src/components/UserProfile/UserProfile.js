import React from 'react';
import './UserProfile.css';
import AddImg from './AddImg/AddImg';

export default function UserProfile(props) {
  function handleImg() {
    props.action();
  }

  return (
    <div className="current-user">
      <div className="profile-img" onClick={handleImg}>
        <i className="fa fa-user" aria-hidden="true">
          {/* */}
        </i>
      </div>
      {props.user}
      {props.addImg ? <AddImg /> : null}
    </div>
  );
}
