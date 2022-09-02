import React, {useState, useEffect} from "react";
import FormDisplay from "./Formpage/Formpage"

const App = () => {
  const initialData = {size:"", sauce:"", topping:"", sub:"", special:"", name:""}
  
  const [formData, setFormData] = useState(initialData)
  
  
  function submit(){

  }
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <FormDisplay submit={submit} value={formData}/>
      
    </>
  );
};
export default App;
