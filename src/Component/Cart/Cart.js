
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    let total = 0; 
    for (let i = 0; i < cart.length; i++) {
        const cours = cart[i];
        total = total + cours.price
        
    }

    return (
        <div>
            <h2 className={"cart-summr"}>Course Summary</h2>
            <h3 className={"cart"}>Course:{cart.length}</h3>
            <h4 className={"cart"}> Fee: {cart.price}</h4>
             <h4 className={"cart"}>Total fee: {total}</h4>
             <button className={"button"}>Entry Now</button>
        </div>
    )
    }

export default Cart;