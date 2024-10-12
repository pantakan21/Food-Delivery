import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    // รับข้อมูลมาจาก Context
    const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
    // เอาไว้ใช้เปลี่ยนหน้าเหมือนกับ Link แต่อันนี้มันจะเหมือนการ Submit
    const navigate = useNavigate();

    return (
        <div className = "cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {/* เอาข้อมูลของอาหารมาแสดงทีละตัว */}
                {food_list.map((item, index) => {
                    // อันนี้คือดูว่าใน State cartItems มีสินค้าอยู่ไหม ถ้ามีจะ return(โดย item คือสินค้าใน assets.js เพราะการเอามา map มันส่งข้อมูลข้างในมาเป็นชื่อ item)
                    if(cartItems[item._id]>0) {
                        return(
                            <div>
                                {/* ในนี้คือการเอาข้อมูลของ element ตัวที่กำลัง map อยู่ในรอบนั้น ๆ มาแสดง */}
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    {/* อันนี้คือจำนวนของ item._id นั้น ๆ ที่มีอยู่ใน State เพราะกดครั้งนึง id ก็เพิ่ม 1 */}
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price*cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className = "cross">x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() ===0?0:getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="Promo Code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;