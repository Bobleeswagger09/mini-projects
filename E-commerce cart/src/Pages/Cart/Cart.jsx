import { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context';
import { PRODUCTS } from '../../products';
import CartItem from './cart-item';
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cartItem, getTotalCartItem } = useContext(ShopContext);

    const totalAmount = getTotalCartItem();
    return (  
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItem[product.id] !== 0){
                        return <CartItem data= {product} />
                    }
                })}
            </div>
            
            { totalAmount > 0 ?
                <div className="checkout">
                    <p>total: ${totalAmount}</p>
                    <button>Continue Shopping</button>
                    <Link to='/'>
                        <button>Checkout</button>
                    </Link>
                </div>
            :
            <h2>Cart Empty</h2>
            }
        </div>
    );
}
 
export default Cart;