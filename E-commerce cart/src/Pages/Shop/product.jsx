import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context';

const Product = (props) => {
    const { id, productName, price, productImage  } = props.data;
    const { addToCart, cartItem } = useContext(ShopContext);

    const numOfCart = cartItem[id];
    return ( 
        <div className="product">
            <img src={productImage} alt="" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart { numOfCart > 0 && <> ({numOfCart})</>}
            </button>
        </div>
    );
}
 
export default Product;

// product