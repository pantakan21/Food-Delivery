import React, { useContext } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

// รับค่ามาจากหน้า FoodDisplay.jsx โดยแต่ละค่าคือค่าของแต่ละ Item เลย
const FoodItem = ({id, name, price, description, image}) => {
    // เรียกใช้ Context โดยดึงค่า cartItems, addToCart, removeFromCart มาใช้
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    
    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className = "food-item-image" src={image}/>
                {/* ที่มันสามารถใช้ id เป็นจำนวนสินค้าได้เพราะ FoodItem จะไปแสดงผลโดยการ Map ซึ่งมันเป็นของแต่ละ Element อยู่แล้ว */}
                {/* ถ้าไม่มีค่า id อยู่ใน cartItems */}
                {!cartItems[id]
                    // ถ้าไม่มีค่าให้แสดงปุ่ม add โดย Event onClick จะผูกกับฟังก์ชั่นที่รับมาจากหน้า Context โดยจะส่ง ID ออกไป
                    ?<img className = "add" onClick={() => addToCart(id)} src = {assets.add_icon_white}/>
                    // ถ้ามีค่าอยู่แล้วให้แสดงปุ่ม + - จำนวนสินค้าแทนปุ่ม add
                    :<div className = "food-item-counter">
                        {/* id ในที่นี้คือจำนวนสินค้า */}
                        <img onClick = {()=> removeFromCart(id)} src={assets.remove_icon_red}/>
                        <p>{cartItems[id]}</p>
                        <img onClick = {()=> addToCart(id)} src={assets.add_icon_green}/>
                    </div>
                }
            </div>
            {/* แสดงข้อมูลอื่น ๆ(ชื่อ, ดาว, ราคา, ข้อความ) */}
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts}/>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
