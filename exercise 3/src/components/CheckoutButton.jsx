import React from "react";

export default function CheckoutButton({ total }) {
  const isDisabled = parseFloat(total) === 0;

  return (
    <button 
      className="checkout-button" 
      disabled={isDisabled}
    >
      <p>Checkout</p>
      <p className="right">{"$ " + total}</p>
    </button>
  );
}