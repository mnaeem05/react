import React, { Component } from 'react';
import {TextField} from 'material-ui/';

const styles = {
    box02:{
    fontWeight: 'bold',
    color: '#ff6666',
    fontFamily: "monospace",
    cursor: 'pointer',
    },
button4: {
    display: 'block',
    height: 25,
    width: 80,
    background: 'darkslateblue',
    cursor: 'pointer',
    fontFamily: "Verdana",
    fontSize: 15,
    color: 'whitesmoke',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    position: 'relative',
    left: 590,
    top: 80,
  },
}

export default class signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email:'',
      age:'',
      value: ''};

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
   handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeAge(event){
     this.setState({age: event.target.value});
  }


  handleSubmit(event) {
    console.log('User Name: ' + this.state.username);
    console.log('User Email: ' + this.state.email);
    console.log('User Age: ' + this.state.age);
    event.preventDefault();
  }


    
    render() {
    return (
        <div>
        <h2 style={styles.box02} >Create Account</h2>
        <form onSubmit={this.handleSubmit}>
        <TextField
      hintText="Please type your name"
      floatingLabelText="User Name"
      required
      value={this.state.username} onChange={this.handleChangeUsername}
    /><br />
      <TextField
      type="email"
      hintText="Please type your email"
      floatingLabelText="User Email"
      required
      value={this.state.email} onChange={this.handleChangeEmail}
    /><br />
    <TextField
      type="number"
      hintText="Above 18 Only"
      floatingLabelText="Age"
      maxLength= '2'
      // required
      value={this.state.age} onChange={this.handleChangeAge}
    /><br />
    <TextField
      hintText="Must be 8 characters"
      type="password"
      floatingLabelText="Password"
      maxLength= '8'
      // required
    /><br />
    <TextField
      hintText="Must be same"
      type="password"
      floatingLabelText="Confirm password"
      maxLength= '8'
      // required
    />
    <button value="Submit" style={styles.button4}> Submit </button>
    </form>
    <br />
        </div>
    )
    }
}