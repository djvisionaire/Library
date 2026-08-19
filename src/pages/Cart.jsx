import React, {useState, useEffect} from "react";
import emptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
    let price = 0;
    cart.forEach((item) => {
            price += +((item.salePrice || item.originalPrice) * item.quantity);
            });
    return price;
    };
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quanity">Quanity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart"__body>
                                {
                                    cart.map(book => {
                                        return (
                                            <div className="cart__item">
                                    <div className="cart__book">
                                        <img src={book.url} className="cart__book--img" alt="" />
                                        <div className="cart__book--info">
                                            <span className="cart__book--title">
                                                {book.title}
                                            </span>
                                            <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                            <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
                                        </div>
                                        <div className="cart__quanity">
                                            <input type="number" min={0} max={99} className="cart__input" value={book.quantity} onChange={(event)=> changeQuantity(book, event.target.value) } />
                                        </div>
                                        <div className="cart__total">
                                            ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                                        )
                                    })
                                }
                                
                            </div>
                            {
                                cart.length === 0 && (
                                    <div className="cart__empty">
                                <img src={emptyCart} className="cart__image" />
                                <h2>You don't have any books in your cart!</h2>
                                <link to="/Books">
                                    <button className="btn">Browse books</button>
                                </link>
                            </div>
                            )}
                            
                        </div>
                    </div>
                    <div className="total__container">
                        <div className="total__selected">
                            <h2 className="total__title">Order Summary</h2> 

                        </div>
                        {cart.length > 0 && (<div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal:</span>
                                <span>${(total() * 0.9).toFixed(2)}</span>
                            </div>
                             <div className="total__item total__tax">
                                <span>Tax:</span>
                                <span>${(total() * 0.1).toFixed(2)}</span>
                            </div>
                             <div className="total__item total__price">
                                <span>Total:</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <button className="btn__checkout no-cursor">Proceed to checkout</button>
                        </div>)}
                    </div>
                </div>
            </div>
            </main>
        </div>
    );
}

export default Cart;