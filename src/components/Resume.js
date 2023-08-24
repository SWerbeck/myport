import {React, } from "react";

import swerbeckresume from "../elements/swerbeckresume.pdf"



const Resume = () => {
    
return(
<div>
<object data={swerbeckresume} type="application/pdf" width="100%" height="auto" background="green">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>
</div>

)}

export default Resume