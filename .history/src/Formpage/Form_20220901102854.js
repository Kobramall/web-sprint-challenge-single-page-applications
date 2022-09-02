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
       <div>Add Topping
        <h3>Required</h3>
       <label>
        <input
        type="checkbox"
        name="Pepperoni"
        />
      </label>
      <label>
      <input
        type="checkbox"
        name="Sausage"
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Canadian Bacon"
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Spicy Italian Sausage"
        />
       </label>
        <label>
        <input
        type="checkbox"
        name="Grilled Chicken"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Onions"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Green Pepper"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Diced Tomatos"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Black Olives"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Roasted Garlic"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Artchoke Hearts"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Three Cheese"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Pinapple"
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Extra Cheese"
        />
        </label>
       
        </div>
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