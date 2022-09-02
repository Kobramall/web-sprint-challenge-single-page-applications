import React, {useState, useEffect} from "react";
import Form from "./Formpage"
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";
import * as yup from 'yup'
import schema from "./Schema";

function Pizza(props ){
  Form()
}

const App = () => {
  const initialData = {size:"", sauce:"", topping1: false, topping2:false, topping3:false, sub:false, special:"", name:""}
  const initialErrors = {size:"", sauce:"", topping1: '', topping2:'', topping3:'', sub:'', special:"", name:""} 
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
          topping1: formData.topping1,
          topping2: formData.topping2,
          topping3: formData.topping3,
          sub: formData.sub
          }
          postNewPizza(newPizza);
  }

  const postNewPizza = newPizza => {
    axios.post("https://reqres.in/api/orders", newPizza)
    .then(res=>{
      setFormData(initialData);
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
     
     <Link to ='/'>Home</Link>
      <Link id="order-pizza" to='/pizza'>Order Pizza!</Link>
     <Route exact path="/"/>
     <Route path='/pizza' component={Pizza}></Route>
      <div>{formErrors.name}</div>
      <Form submit={submit} value={formData} change={change} disabled={disabled}/>
      
    </>
  );
};
export default App;
