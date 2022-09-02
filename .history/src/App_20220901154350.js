import React, {useState, useEffect} from "react";
import Form from "./Formpage"
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";

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
          postNewFriend(newFriend);
  }

  const postNewFriend = newFriend => {
    axios.post("https://reqres.in/api/orders", newFriend)
    .then(res=>{
      setFormData([res.data, ...formData])
    })
    .catch(err =>{
      console.error(err)
    })
    .finally(() =>setFormData(initialData))
  }
  
  return (
    <>
      <h1>Lambda Eats</h1>
      <BrowserRouter>
      <Link to='/order-pizza'>Order Pizza!</Link>
     <Route path='/order-pizza' component={Form} />
      </BrowserRouter>
      
      
    </>
  );
};
export default App;
