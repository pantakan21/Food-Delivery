import { createContext, useState } from "react";
import {food_list} from "../assets/assets";
// itemId คือจำนวนสินค้าชิ้นนั้น ๆ ในตะกร้า

// สร้าง Context เปล่า ๆ เอาไว้ และ Export ออกไป
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    // สร้าง State เพื่อเอาไว้เก็บสินค้าในตระกร้า
    const [cartItems, setCartItems] = useState({});

    // ตัวแปรนี้เอาไว้เก็บฟังก์ชั่นที่รับ itemId มาเป็น Parameter
    const addToCart = (itemId) => {
        // ตรวจสอบว่ามีค่า itemId อยู่หรือไม่(เช็คว่ามีสินค้านี้ในตะกร้าแล้วหรือยัง)
        if(!cartItems[itemId]) {
            // ใช้ฟังก์ชันอัปเดต State เพื่อสร้าง Object ใหม่ที่มีค่าของ cartItems จากสถานะเดิม(prev) แต่อัปเดตค่า itemId ในตะกร้า
            // ...prev คือค่าก่อนหน้าทั้งหมด และก็กำหนดให้ itemId = 1
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else {
            // สร้าง Object ใหม่ที่มีค่าของ cartItems จากสถานะเดิม(prev) แต่อัปเดตค่า itemId ในตะกร้า
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    // รับ itemId เป็น Parameter เอาไว้ลดจำนวนสินค้าจากหน้า FoodItem.jsx
    const removeFromCart = (itemId) => {
        // สร้าง Object ใหม่ที่คัดลอกค่าของ cartItems ของเดิม(prev) มาทั้งหมด 
        // จากนั้นจะอัปเดตจำนวนของสินค้าที่ตรงกับ itemId ที่รับเข้ามา โดยลบจำนวนลง 1 จากค่าเดิม
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    // ส่งออกไปใช้หน้า Navbar.jsx เพื่อดูว่ามีสินค้าในตะกร้าเท่าไร และส่งเข้า Cart.jsx เพื่อคำนวนราคารวม
    const getTotalCartAmount = () => {
        let totalAmount = 0;   

        // วน item ที่มีอยู่ใน State cartItems
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                // itemInfo = เก็บฟังก์ชั่นที่เอา product._id จาก asset.js มาเทียบกับ item ที่รับเข้ามา
                let itemInfo = food_list.find((product) => product._id === item);
                // เอาราคาของ item นั้นคูณกับจำนวนสินค้าของสินค้าชิ้นนั้น ๆ
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    // สร้างเอาไว้เพื่อส่งค่าออกไปให้ Component อื่น ๆ เรียกใช้
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    // เอา Context ผูกกับค่า contextValue และเอามาครอบ Component ทั้งหมดที่สามารถใช้ Context นี้ได้
    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;