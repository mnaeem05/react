import React, { Component } from 'react';

const style = {
  fontSize: 15,
  color: '#6c6f60',
  listStyleType: 'none',

}

export default class About extends Component {
  render() {
    return (
        <div> About
        <h2 style={{color:'#ff7373', fontSize: '20', fontFamily: "monospace", cursor: 'pointer'}}> BLOOD BANK - SAMPLE REJECTION CRITERIA </h2>  
        <ul style={style}>
        <li>Insufficient sample – appropriate volume blood tubes are supplied with. Insufficient samples will mean an inability to test and delay in results and provision of blood products.</li>
        <br/>
        <li>Haemolysed sample - if the blood sample has been venepunctured using needle and syringe and a small gauge needle is used to pierce the lid of the Vacutainer tube, haemolysis may occur especially if the blood is forced into the tube by pushing the plunger. Vacutainer tubes contain a vaccuum that will naturally draw sufficient blood into the tube. Change to a wider gauge needle before piercing the Vacutainer lid. Haemolysis will prevent the sample from being tested as assays are light transmission dependant and haemolysis in the plasma will give false positive results.</li>
        <br/>
        <li>Samples delayed in transit – Delays in receipt of the sample in Blood Bank will mean a delay in testing and as a result delay in provision of blood products. Significant delays of may mean the sample is no-longer suitable for testing.</li>
        <br/>
        <li>Clotted samples – Samples not taken directly into the Vacutainer and mixed sufficiently may clot. Once clotted the red cells cannot be tested for the blood group and the sample will be unsuitable for testing.</li>
        <br/>
        </ul>
         </div>
    )
  }
}
