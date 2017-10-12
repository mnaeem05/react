import React, { Component } from 'react';
import {AppBar, TextField, Checkbox, Drawer, RaisedButton, IconMenu, MenuItem, IconButton} from 'material-ui/';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';


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
  box02: {
    position: 'relative',
    right: 10,
    top: 10,
  },
  box03: {
    position: 'relative',
    right: -80,
    top: 120,
  }
}

export default class Main extends Component {
      
constructor(props) {
    super(props);
    this.state = {
      username:'',
      email:'',
      value: '',
      open: false,
};

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeUserPwd = this.handleChangeUserPwd.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
   handleChangeUserPwd(event) {
    this.setState({pwd: event.target.value});
  }

  handleSubmit(event) {
    console.log('User Name: ' + this.state.username);
    console.log('User Password: ' + this.state.pwd);
    this.setState({username:''});
    this.setState({pwd:''});
    event.preventDefault();
  }

  

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
        <div> 
          <div style={styles.box03}>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Account" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>


        <AppBar
    title="Blood Bank Online App"
    // iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={<IconButton><Menu  onClick={this.handleToggle}/></IconButton>}
    /> 
        
        
        <Drawer           
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem onClick={this.handleClose}>Donor</MenuItem>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>

        </Drawer>
        <h2 style={styles.box01}>Login here</h2>
        <form onSubmit={this.handleSubmit}>
        <TextField
      hintText="Please type here"
      floatingLabelText="User Name"
      required
      value={this.state.username} onChange={this.handleChangeUsername}  
    /><br />
    <TextField
      hintText="Please type here"
      type="password"
      floatingLabelText="Password"
      required
      value={this.state.pwd} onChange={this.handleChangeUserPwd}
    /><br />
          <div style={styles.block}>
        <Checkbox
          label="I Agree"
          required
          style={styles.checkbox}/>
    </div>
    <button value="Submit" style={styles.button3}> Submit </button>
    </form>
    </div>
    )
  }
}
