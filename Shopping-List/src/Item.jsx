const Item = ({eachItem, deleteItem}) => {
    return ( 
        <li>
            {eachItem}
            <button onClick={() => deleteItem(eachItem)}>x</button>
        </li>
     );
}
 
export default Item;