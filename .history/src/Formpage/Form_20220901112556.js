import React from "react";


const Form = (props) => {






    return(
      <div>
      <form id="pizza-form" >
       <label> Choice of Size
        <p>Required</p>
      <select
      name="size"
      value="">
        <option value="">- Select a Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
        </label>
        <div className="Sauce">
        <label>Choice of Sauce
        <h3>Required</h3>
        <input
        type="radio"
        name="sauce"
        value=""
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value=""
        />
        
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value=""
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value=""
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value=""
        />
        </label>
        </div>
       
       <div className="checkboxes">Add Topping
        <h3>Required</h3>
       <label>
        <input
        type="checkbox"
        name="Pepperoni"
        value=""
        checked=""
        />
      </label>
      <label>
      <input
        type="checkbox"
        name="Sausage"
        value=""
        checked=""
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Canadian Bacon"
        value=""
        checked=""
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Spicy Italian Sausage"
        value=""
        checked=""
        />
       </label>
        <label>
        <input
        type="checkbox"
        name="Grilled Chicken"
        value=""
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Onions"
        value=""
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Green Pepper"
        value=""
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Diced Tomatos"
        value=""
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Black Olives"
        value=""
        checked=""
        />
        </label>
        <label>
        <input
          type="checkbox"
          name="Roasted Garlic"
          value=""
          checked=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Artchoke Hearts"
           value=""
           checked=""
        />
        </label>
        <label>
        <input
            type="checkbox"
            name="Three Cheese"
            value=""
            checked=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Pinapple"
           value=""
           checked=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Extra Cheese"
           value=""
           checked=""
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
       type="submit" name="submit" value=""/>
       </form>
       </div>
      
    )
}

export default Form