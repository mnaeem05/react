import React, { Component } from 'react';
import {AppBar, TextField, Checkbox} from 'material-ui/';

const styles = {
  block: {
    maxWidth: 250,
    position: 'relative',
    left: 580,
    top: 50,
  },
  checkbox: {
    marginBottom: 5,
  },
  button3: {
    display: 'block',
    height: 30,
    width: 80,
    background: 'limegreen',
    cursor: 'pointer',
    fontFamily: "monospace",
    fontSize: 20,
    color: 'darkred',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    position: 'relative',
    left: 590,
    top: 80,
  },
  box01:{
    fontWeight: 'bold',
    color: '#ff6666',
    fontFamily: "monospace",
    cursor: 'pointer',
  },
}

export default class Main extends Component {
      
      constructor() {
        super();
        this.state = {
            value: '',
        }
      }
changeHandler(ev) {
    console.log({ User_Name: ev.target.value });
  }

  render() {
    return (
        <div> <AppBar
    title="Blood Bank Online App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    /> 
        <h2 style={styles.box01}>Login here</h2>
        <TextField
      hintText="Please type here"
      floatingLabelText="Email"
      onChange={(ev) => { this.changeHandler(ev) }}
    /><br />
    <TextField
      hintText="Please type here"
      type="password"
      floatingLabelText="Password"
    /><br />
          <div style={styles.block}>
        <Checkbox
          label="I Agree"
          style={styles.checkbox}/>
    </div>
    <button value="Submit" style={styles.button3}> Submit </button>
    </div>
    )
  }
}
