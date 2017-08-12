import React from 'react';
import './Messages.css';

export default function Messages(props) {
  const { url, height, width } = props.url;

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
      <img src={url} height={height} width={width} />
    </div>
  );
}
