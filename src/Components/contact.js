import React, { Component } from 'react';
import {FlatButton, RaisedButton} from 'material-ui/';


const styles = {
  button1:{
  position: 'relative',  
  top: 100,
  backgroundColor: '#f0e5ed',
  border: 'solid 5px green'
  },
  button2:{ 
  position: 'relative',  
  top: 10,  
  },
};


export default  class Contact extends Component {
  render() {
    return (
        <div> <FlatButton label="Email" primary={true} style={styles.button2} />
        <RaisedButton label="Comments" secondary={true} style={styles.button2} /> 
        <button style={styles.button1} > Hello world </button>
        </div>  
    )
  }
}
