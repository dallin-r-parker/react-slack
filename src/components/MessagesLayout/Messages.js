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
      <img src={url} alt="giphy" height={height} width={width} />
    </div>

    //{(!props.giphy) ?
    //  <div className="message-content">
    //  <p>{props.time}</p>
    //  <p>{props.user}</p>
    //  <p>{props.message}</p>
    //</div> :
    //<div className="message-content">
    //  <img src={props.} alt=""/>
    //</div>}
  );
}
