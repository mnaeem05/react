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
  }
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
        <TextField
      hintText="Please type here"
      floatingLabelText="Name"
      onChange={(ev) => { this.changeHandler(ev) }}
    /><br />
    <TextField
      hintText="Please type here"
      floatingLabelText="Age"
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