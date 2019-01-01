import React from 'react';
import { Link } from 'react-router';

const Navigation = props => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Posts</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);

export default Navigation;