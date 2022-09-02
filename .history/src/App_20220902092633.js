import React, {useState, useEffect} from "react";
import Form from "./Formpage"
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";
import * as yup from 'yup'
import schema from "./Schema";

const App = () => {
  const initialData = {size:"", sauce:"", special:"", name:""}
  const initialErrors = {size:"", sauce:"",  special:"", name:""} 
  const initialDisabled = true
  
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState (initialDisabled);
  
  const validate = (name, value) => {

    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const change = (name, value) =>{
    validate(name, value)
    setFormData({...formData, [name]: value})
  }
  
  function submit(){
        const newPizza = {
          size : formData.size.trim(),
          sauce : formData.sauce.trim(),
          special : formData.special.trim(),
          name : formData.name.trim(),
          }
          postNewPizza(newPizza);
  }

  const postNewPizza = newPizza => {
    axios.post("https://reqres.in/api/orders", newPizza)
    .then(res=>{
      setFormData([res.data, ...formData])
    })
    .catch(err =>{
      console.error(err)
    })
    .finally(() =>setFormData(initialData))
  }
  
  useEffect(()=>{
    schema.isValid(formData).then(valid => setDisabled(!valid))
  }, [formData])
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <BrowserRouter>
      <Link id order-pizza to='/pizza'>Order Pizza!</Link>
     <Route path='/pizza' ></Route>
      </BrowserRouter>
      <Form submit={submit} value={formData} change={change} disabled={disabled}/>
      
    </>
  );
};
export default App;
