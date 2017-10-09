import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div> Home 
        
              <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/">Sign In</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
    )
  }
}
