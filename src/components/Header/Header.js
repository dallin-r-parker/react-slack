import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header>
      <title>#lead</title>
      <div className="right-wrap">
        <i className="fa fa-phone" aria-hidden="true">
          {/* */}
        </i>
        <i className="fa fa-info-circle" aria-hidden="true">
          {/* */}
        </i>
        <i className="fa fa-cog" aria-hidden="true">
          {/* */}
        </i>
        <input type="text" placeholder="Search" />
        <i className="fa fa-at" aria-hidden="true">
          {/* */}
        </i>
        <i className="fa fa-star-o" aria-hidden="true">
          {/* */}
        </i>
        <i className="fa fa-ellipsis-v" aria-hidden="true">
          {/* */}
        </i>
        <div className="menu" style={{ display: 'none' }}>
          <p>logout</p>
        </div>
      </div>
    </header>
  );
}
