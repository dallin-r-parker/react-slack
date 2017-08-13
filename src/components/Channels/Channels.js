import React from 'react';
import './Channels.css';
import { NavLink } from 'react-router-dom';

export default function Channels({ channel, id }) {
  return (
    <div className="channel-title">
      <p>
        <NavLink to={`/channel/${id}`} activeStyle={{ color: 'black' }}>
          <span>#</span>
          {channel}
        </NavLink>
      </p>
    </div>
  );
}
