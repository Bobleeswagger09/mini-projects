import { useState } from "react";
import Item from './Item'

const App = () =>{

  const [items, setItems] = useState([]);

  function removeItem(itemTObeRemoved){
    const newItems = items.filter((item) =>{
      return item !== itemTObeRemoved;
    });
    setItems(newItems);
  }

  function handleSubmit(event){
    event.preventDefault(); // prevent it from refreshing

    const form = event.target; // for targetting the form 
    const input = form.item; // get input from form

    const newItem = [...items, input.value] // copy everything in our list to the new item list 

    setItems(newItem); // updating the shopping list
    form.reset();
  }

  return(
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>items to buy</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="item"
            placeholder="Add new item"
            required
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
              <Item  deleteitem={removeItem} key={item + index} eachItem={item} />
          ))}
      </ul>
      </div>
    </> 
  )
}

export default App;




