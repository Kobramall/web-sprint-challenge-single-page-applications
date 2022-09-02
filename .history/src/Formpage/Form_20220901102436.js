import React from "react";


const Form = (props) => {






    return(
      
      <form id="pizza-form" >
       <label> Choice of Size
        <h3>Required</h3>
      <select>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
        </label>
       <label>Choice of Sauce
        <h3>Required</h3>
        <input
        type="radio"
        />
       </label>
       <label>Add Topping
        <h3>Required</h3>
        <input
        type="checkbox"
        name="Pepperoni"
        />
      <input
        type="checkbox"
        name="Sausage"
        />
       <input
        type="checkbox"
        name="Canadian Bacon"
        />
       <input
        type="checkbox"
        name="Spicy Italian Sausage"
        />
        <input
        type="checkbox"
        name="Grilled Chicken"
        />
        <input
        type="checkbox"
        name="Onions"
        />
        <input
        type="checkbox"
        name="Green Pepper"
        />
        <input
        type="checkbox"
        name="Diced Tomatos"
        />
        <input
        type="checkbox"
        name="Black Olives"
        />
        <input
        type="checkbox"
        name="Roasted Garlic"
        />
        <input
        type="checkbox"
        name="Artchoke Hearts"
        />
        <input
        type="checkbox"
        name="Three Cheese"
        />
        <input
        type="checkbox"
        name="Pinapple"
        />
        <input
        type="checkbox"
        name="Extra Cheese"
        />
       </label>
       <label>Choice of Substitute 
        <h3>Required</h3>
        <input
        type="switch"
        />
       </label>
       <label>
        <h3>Required</h3>
        <input
        type="text"
        />
       </label>
       <input
       type="submit">Add to Order</input>
       </form>
      
    )
}

export default Form