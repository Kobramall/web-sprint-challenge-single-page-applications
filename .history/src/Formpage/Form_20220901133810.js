import React from "react";


const Form = (props) => {


const onSumbit = evt =>{
    const {submit} = props
    
    evt.preventDefault()
    submit()
}



    return(
      <div>
      <form id="pizza-form" onSumbit={onSumbit} >
       <label> 
        <h2>Choice of Size</h2>
        <p>Required</p>
      <select
      name="size"
      value={value.size}
      id="size-dropdown">
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
        value={value.sauce}
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={value.sauce}
        />
        
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={value}
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={value}
        />
        </label>
        <label>
        <input
        type="radio"
        name="sauce"
        value={value.sauce}
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
        value={value.topping}
        checked=""
        />
      </label>
      <label>
      <input
        type="checkbox"
        name="Sausage"
        value={value.topping}
        checked=""
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Canadian Bacon"
        value={value.topping}
        checked=""
        />
       </label>
       <label>
       <input
        type="checkbox"
        name="Spicy Italian Sausage"
        value={value.topping}
        checked=""
        />
       </label>
        <label>
        <input
        type="checkbox"
        name="Grilled Chicken"
        value={value.topping}
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Onions"
        value={value.topping}
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Green Pepper"
        value={value.topping}
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Diced Tomatos"
        value={value.topping}
        checked=""
        />
        </label>
        <label>
        <input
        type="checkbox"
        name="Black Olives"
        value={value.topping}
        checked=""
        />
        </label>
        <label>
        <input
          type="checkbox"
          name="Roasted Garlic"
          value={value.topping}
          checked=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Artchoke Hearts"
           value={value.topping}
           checked=""
        />
        </label>
        <label>
        <input
            type="checkbox"
            name="Three Cheese"
            value={value.topping}
            checked=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Pinapple"
           value={value.topping}
           checked=""
        />
        </label>
        <label>
        <input
           type="checkbox"
           name="Extra Cheese"
           value={value.topping}
           checked=""
        />
        </label>
        </div>
       <label>
        <h2>Choice of Substitute</h2>
        <p>Required</p>
        <input
        type="checkbox"
        value={value.sub}
        />
       </label>
       <label>
        <h2>Special Instructions</h2>
        <p>Required</p>
        <input
        type="text"
        name="name-input"
        id="special-text"
        value={value.special}
        />
       </label>
       <label>
        <h2>Enter Name For Order</h2>
        <p>Required</p>
        <input
        type="text"
        name="name-input"
        id="name-input"
        value={value.name}
        />
       </label>
       <label>
       <input 
       type="submit" name="submit" value="" id="pizza-form"/>
       </label>
       </form>
       </div>
      
    )
}

export default Form