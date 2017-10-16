import React, { Component } from 'react';
import {TextField} from 'material-ui/';
import * as firebase from 'firebase';
import '../fbconfig'

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
      pwd1:'',
      pwd2:'',
      value: ''};

    this.ref = firebase.database().ref();  
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handlePwd1 = this.handlePwd1.bind(this);
    this.handlePwd2 = this.handlePwd2.bind(this);
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
  handlePwd1(event){
     this.setState({pwd1: event.target.value});
  }
  handlePwd2(event){
     this.setState({pwd2: event.target.value});
  }

  sendToFirebase(ev) {
    ev.preventDefault();
    this.ref.child("users").push({ name: this.state.username, email: this.state.email, age: this.state.age, pwd1: this.state.pwd1, pwd2: this.state.pwd2 });
    this.setState({username:""})
    this.setState({email:""})
    this.setState({age:""})
    this.setState({pwd1:""})
    this.setState({pwd2:""})    
  }

    
    render() {
    return (
        <div>
        <h2 style={styles.box02} >Create Account</h2>
        <form  onSubmit={this.sendToFirebase.bind(this)}>
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
      required
      value={this.state.age} onChange={this.handleChangeAge}
    /><br />
    <TextField
      hintText="Must be 8 characters"
      type="password"
      floatingLabelText="Password"
      maxLength= '8'
      value={this.state.pwd1} onChange={this.handlePwd1}
      required
    /><br />
    <TextField
      hintText="Must be same"
      type="password"
      floatingLabelText="Confirm password"
      maxLength= '8'
      value={this.state.pwd2} onChange={this.handlePwd2}
      required
    />
    <button value="Submit" style={styles.button4}> Submit </button>
    </form>
    <br />
        </div>
    )
    }
}