import { useState } from 'react';
import Item from './Item';

const App = () =>{
  const [items, setItems] = useState([]);

  function removeItem(itemTobeRemoved){
    const newItem = items.filter((item) => {
      return item !==  itemTobeRemoved;
    });
    setItems(newItem);
  };

  function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    
    const newItem = [...items, input.value];
    setItems(newItem)
    form.reset(); // to reset the form
  }


  return(
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>items to buy</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            name='item'
            placeholder='Add new item'
            required  
          />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item, index) => (
            <Item key={item + index} deleteItem={removeItem} eachItem={item}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;