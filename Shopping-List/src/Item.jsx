const Item = ({ eachItem, deleteitem }) => {
    return ( 
        <li>
            {eachItem}
            <button className='delete' onClick={() => deleteitem(eachItem)}>
                x
            </button>
        </li>
     );
}
 
export default Item;