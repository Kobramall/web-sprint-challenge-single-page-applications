import React from "react";


const Form = (props) => {






    return(
      <div>
      <form id="pizza-form" >
       <label> 
        <h2>Choice of Size</h2>
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
        <label>
        <h2>Choice of Sauce</h2>
        <p>Required</p>
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
       
       <div className="checkboxes">
        <h2>Add Topping</h2>
        <p>Required</p>
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
       <label>
        <h2>Choice of Substitute</h2>
        <p>Required</p>
        <input
        type="checkbox"
        value=""
        />
       </label>
       <label>
        <h2>Special Instructions</h2>
        <p>Required</p>
        <input
        type="text"
        name="name-input"
        id="special-text"
        value=""
        />
       </label>
       <label>
        <h2>Enter Name For Order</h2>
        <p>Required</p>
        <input
        type="text"
        name="name-input"
        id="name-input"
        value=""
        />
       </label>
       <label>
       <input 
       type="submit" name="submit" value=""/>
       </label>
       </form>
       </div>
      
    )
}

export default Form