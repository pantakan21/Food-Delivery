import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

// รับค่า Category มาจากหน้า Home เพื่อเอาไว้แสดงผล
const FoodDisplay = ({category}) => {
    // รับค่า food_list มาจาก Context ทีสร้างเอาไว้
    const {food_list} = useContext(StoreContext);
    
    return (
        <div className='food-display' id = 'food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {/* เอาข้อมูลใน food_list มาวนรอบทุกตัว */}
                {food_list.map((item,index) => {
                    if(category==="All" || category === item.category) {
                        // เรียกใช้ Component FoodItem และส่งข้อมูลของ Item แต่ละตัวที่วนกลับไป
                        return <FoodItem key = {index} id = {item._id} name = {item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay