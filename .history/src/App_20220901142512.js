import React, {useState, useEffect} from "react";
import Form from "./Formpage"

const App = () => {
  const initialData = {size:"", sauce:"", topping:"", sub:"", special:"", name:""}
  
  const [formData, setFormData] = useState(initialData)
  
  
  const change = (name, value) =>{
    setFormData({...formData, [name]: value})
  }
  
  function submit(){
        const newFriend = {
          size : formData.size.trim(),
          sauce : formData.sauce.trim(),
          topping : formData.topping.trim(),
          sub : formData.sub.trim(),
          special : formData.special.trim(),
          name : formData.name.trim(),
          }
  }
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <Form submit={submit} value={formData} change={change}/>
      
    </>
  );
};
export default App
