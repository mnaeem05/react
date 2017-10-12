import React, { Component } from 'react';
import {AppBar, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/';

const styles = {
  box07: {
    position: 'relative',
    left: 5,
    top: -20,
  },
  box06: {
    fontSize: 15,
    color: '#6c6f60',
    listStyleType: 'none',
  },
}

export default class About extends Component {
  render() {
    return (
        <div> About
        <AppBar
    title="Blood Bank Online App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={styles.box07}
    /> 
        <h2 style={{color:'#ff7373', fontSize: '20', fontFamily: "monospace", cursor: 'pointer'}}> BLOOD BANK - SAMPLE REJECTION CRITERIA </h2>  
        <ul style={styles.box06}>
        <li>Insufficient sample – appropriate volume blood tubes are supplied with. Insufficient samples will mean an inability to test and delay in results and provision of blood products.</li>
        <br/>
        <li>Haemolysed sample - if the blood sample has been venepunctured using needle and syringe and a small gauge needle is used to pierce the lid of the Vacutainer tube, haemolysis may occur especially if the blood is forced into the tube by pushing the plunger. Vacutainer tubes contain a vaccuum that will naturally draw sufficient blood into the tube. Change to a wider gauge needle before piercing the Vacutainer lid. Haemolysis will prevent the sample from being tested as assays are light transmission dependant and haemolysis in the plasma will give false positive results.</li>
        <br/>
        <li>Samples delayed in transit – Delays in receipt of the sample in Blood Bank will mean a delay in testing and as a result delay in provision of blood products. Significant delays of may mean the sample is no-longer suitable for testing.</li>
        <br/>
        <li>Clotted samples – Samples not taken directly into the Vacutainer and mixed sufficiently may clot. Once clotted the red cells cannot be tested for the blood group and the sample will be unsuitable for testing.</li>
        <br/>
        </ul>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn style={{cursor: 'pointer'}}>M. Naeem</TableRowColumn>
        <TableRowColumn>Job</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn style={{cursor: 'pointer'}}>Naveed Patel</TableRowColumn>
        <TableRowColumn>Business</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn style={{cursor: 'pointer'}}>M. Saadiq</TableRowColumn>
        <TableRowColumn>Business</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn style={{cursor: 'pointer'}}>Mohsin</TableRowColumn>
        <TableRowColumn>Teacher</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn style={{cursor: 'pointer'}}>Tahir</TableRowColumn>
        <TableRowColumn>Teacher</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
         </div>
    )
  }
}
