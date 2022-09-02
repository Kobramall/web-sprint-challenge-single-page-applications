import React from "react";


const Form = (props) => {






    return(
      <div>
      <form id="pizza-form" >
       <label> Choice of Size
        <h3>Required</h3>
      <select
      name="size"
      value="">
        <option value="">- Select a Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
        </label>
       <label>Choice of Sauce
        <h3>Required</h3>
        <input
        type="radio"
        name="sauce"
        value=""
        />
       </label>
       <div>Add Topping
        <h3>Required</h3>
       <label>
        <input
        type="checkbox"
        name="Pepperoni"
        value=""
        />
      </label>
      <label>
      <input
        type="checkbox"
        name="Sausage"
        value=""
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Canadian Bacon"
        value=""
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Spicy Italian Sausage"
        value=""
        />
       </label>
        <label>
        <input
        type="checkbox"
        name="Grilled Chicken"
        value=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Onions"
        value=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Green Pepper"
        value=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Diced Tomatos"
        value=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Black Olives"
        value=""
        />
        </label>
        <label>
        <input
          type="checkbox"
          name="Roasted Garlic"
          value=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Artchoke Hearts"
           value=""
        />
        </label>
        <label>
        <input
            type="checkbox"
            name="Three Cheese"
            value=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Pinapple"
           value=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Extra Cheese"
           value=""
        />
        </label>
        </div>
       <label>Choice of Substitute 
        <h3>Required</h3>
        <input
        type="switch"
        value=""
        />
       </label>
       <label>
        <h3>Required</h3>
        <input
        type="text"
        name="gluten"
        value=""
        />
       </label>
       <input
       type="submit" name="submit" value="">Add to Order</input>
       </form>
       </div>
      
    )
}

export default Form