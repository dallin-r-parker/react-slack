import React from 'react';
import './GiphMessage.css';

export default function GiphMessage(props) {
  return (
    <div className="message-content">
      <p>
        {props.time}
      </p>
      <p>
        {props.user}
      </p>
      <p>
        {props.message}
      </p>
      <img src={props.url} height={props.height} width={props.width} alt="" />
    </div>
  );
}
