import React, {useState, useEffect} from "react";
import Form from "./Formpage"
import axios from "axios";

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
      <Link to='order-pizza'>Order Pizza!</Link>
      <Form submit={submit} value={formData} change={change}/>
      
    </>
  );
};
export default App;
