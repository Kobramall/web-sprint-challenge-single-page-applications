import React from "react";
import Form from "./Form";


const FormDisplay = (props) => {
  const {submit, value} = props

    return(
    
        
        <div>
         <h3>Build Your Own Pizza</h3>
         <img></img>
        <h2>Build Your Own Pizza</h2>
        <Form submit={submit} value={value}/>
        </div>
    )
}

export default FormDisplay