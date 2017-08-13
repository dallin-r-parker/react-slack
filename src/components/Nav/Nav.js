import React from 'react';
import './Nav.css';
import Channels from '../Channels/Channels';

export default function Nav(props) {
  console.log('NAV: ', props);
  return (
    <nav className="nav-channel-wrap">
      <Channels channel={props.channels} />
    </nav>
  );
}
