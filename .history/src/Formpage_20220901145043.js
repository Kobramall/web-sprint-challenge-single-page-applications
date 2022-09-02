import React from "react";


const Form = (props) => {

    const {submit, value, change} = props

    const onChange = evt =>{
    const { name, value, checked, type} = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse);
}


    const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}



    return(
      <div>
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
        <input
        type="radio"
        name="sauce"
        value={props.value.sauce}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={props.value.sauce}
        onChange={onChange}
        />
        
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={props.value.sauce}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={props.value.sauce}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={props.value.sauce}
        onChange={onChange}
        />
        </label>
       
        <h2>Add Topping</h2>
        <p>Required</p>
       <label>
        <input
        type="checkbox"
        name="Pepperoni"
        value={props.value.topping}
        onChange={onChange}
        />
      </label>
      <label>
      <input
        type="checkbox"
        name="Sausage"
        value={props.value.topping}
        onChange={onChange}
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Canadian Bacon"
        value={props.value.topping}
        onChange={onChange}
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Spicy Italian Sausage"
        value={props.value.topping}
        onChange={onChange}
        />
       </label>
        <label>
        <input
        type="checkbox"
        name="Grilled Chicken"
        value={props.value.topping}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Onions"
        value={props.value.topping}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Green Pepper"
        value={props.value.topping}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Diced Tomatos"
        value={props.value.topping}
        onChange={onChange}
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Black Olives"
        value={props.value.topping}
        onChange={onChange}
        />
        </label>
        <label>
        <input
          type="checkbox"
          name="Roasted Garlic"
          value={props.value.topping}
          onChange={onChange}
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Artchoke Hearts"
           value={props.value.topping}
           onChange={onChange}
        />
        </label>
        <label>
        <input
            type="checkbox"
            name="Three Cheese"
            value={props.value.topping}
            onChange={onChange}
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Pinapple"
           value={props.value.topping}
           onChange={onChange}
        /><span>Pineapple</span>
        </label>
        <label>
        <input
           type="checkbox"
           value={props.value.topping}
           onChange={onChange}
        /><span>Extra Cheese</span>
        </label>
  
       <label>
        <h2>Choice of Substitute</h2>
        <p>Required</p>
        <input
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
        <h2>Enter Name For Order</h2>
        <p>Required</p>
        <input
        type="text"
        name=""
        id="name-input"
        value={props.value.name}
        onChange={onChange}
        />
       </label>
      <div>
       <button>Add To Order</button>
       </div>
       </form>

       </div>
      
    )
}

export default Form