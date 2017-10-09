import React, { Component } from 'react';
import {FlatButton, RaisedButton} from 'material-ui/';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './Components/main';
import About from './Components/about';
import Contact from './Components/contact';
import Home from './Components/Home';

const style = {
  position: 'relative',  
  top: 8,
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Blood Bank App</h2>
        </div>
        <p className="App-intro">          
        </p>
        
         <Router>
    <div>
        <ul>
        <li><Link to="/Home">Home</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/Home" component={Home}/>
    </div>
  </Router>

  
      </div>
    );
  }
}

export default App;
