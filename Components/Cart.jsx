import React, { useState } from "react";

function Cart() {
    const [cart, setCart] = useState ({
        item: "Skirt", 
        quantity: 0,
    });
        
    function removeSkirt() {
        setCart((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity - 1
        }))
    }

    function addSkirt() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1
        }))
    }

    return (
        <div>
            <button onClick={removeSkirt}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addSkirt}>+</button>
        </div>
    );
}

export default Cart