import React from 'react';
import './ChatInput.css';

export default function ChatInput(props) {
  function handleInput(e) {
    props.update(e.target.value);
  }

  function sendMessage(e) {
    props.action(e.keyCode);
  }

  return (
    <div className="chat-wrap">
      <i className="fa fa-plus" aria-hidden="true">
        {/* */}
      </i>
      <input
        type="text"
        onChange={handleInput}
        onKeyDown={sendMessage}
        value={props.value}
        placeholder="type here..."
      />
    </div>
  );
}
