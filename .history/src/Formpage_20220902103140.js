import React from "react";


const Form = (props) => {

    const {submit, value, change, disabled} = props

    const onChange = evt =>{
    const { name, value, checked, type} = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse);
}


    const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}

console.log(disabled)

    return(
      <div id="order-pizza">
        <h3>Build Your Own Pizza</h3>
         <img></img>
        <h2>Build Your Own Pizza</h2>
      <form id="pizza-form" onSubmit={onSubmit} >
       <label> 
        <h2>Choice of Size</h2>
        <p>Required</p>
      <select
      name="size"
      value={props.value.size}
      id="size-dropdown"
      onChange={onChange}>
        <option value="">- Select a Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
        </label>
     
        <label>
        <h2>Choice of Sauce</h2>
        <p>Required</p>
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value='Original Red'
        onChange={onChange}
        checked={props.value.sauce === 'Original Red'}
        /><span>Original Red</span>
        
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value='Garlic Ranch'
        checked={props.value.sauce === 'Garlic Ranch'}
        onChange={onChange}
        /><span>Garlic Ranch</span>
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value='BBQ Sauce'
        checked={props.value.sauce === 'BBQ Sauce'}
        onChange={onChange}
        /><span>BBQ sauce</span>
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value='Spinach Alfredo'
        checked={props.value.sauce === 'Spinach Alfredo'}
        onChange={onChange}
        /><span>Spinach Alfredo</span>
        </label>
       
        <h2>Add Topping</h2>
        <p>Required</p>
       <label>
        <input
        type="checkbox"
        name="topping1"
        value={props.value.topping1}
        onChange={onChange}
        /><span>Pepperoni</span>
      </label>
      <label>
      <input
        type="checkbox"
        name="topping2"
        value={props.value.topping2}
        onChange={onChange}
        /><span>Sausage</span>
       </label>
       <label>
       <input
        type="checkbox"
        name="topping3"
        value={props.value.topping3}
        onChange={onChange}
        /><span>Canandian Bacon</span>
       </label>
     
  
       <label>
        <h2>Choice of Substitute</h2>
        <p>Required</p>
        <input
        name="sub"
        type="checkbox"
        value={props.value.sub}
        onChange={onChange}
        /><span>Gluten Free Crust</span>
       </label>
       <label>
        <h2>Special Instructions</h2>
        <p>Required</p>
        <input
        type="text"
        name="special"
        id="special-text"
        value={props.value.special}
        onChange={onChange}
        />
       </label>
       <label>
        <h2>Enter Name</h2>
        <p>Required</p>
        <input
        type="text"
        name="name"
        id="name-input"
        value={props.value.name}
        onChange={onChange}
        />
       </label>
      <div>
       <button disabled={disabled}>Add To Order</button>
       </div>
       </form>

       </div>
      
    )
}

export default Form