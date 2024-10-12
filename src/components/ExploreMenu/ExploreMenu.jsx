import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className = "explore-menu" id = "explore-menu">
            <h1>Explore Our Menu</h1>
            <p className = "explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return(
                        // ถ้า div ถูกกดจะเปรียบเทียบค่าก่อนหน้าใน State กับ item.menu_name ว่าตรงกันหรือไม่ ถ้าตรงจะ Set State = "All" ถ้าไม่ตรงจะ Set State = item.menu_name
                        <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key = {index} className="explore-menu-list-item">
                            {/* ดู props ที่ถูกส่งมาว่ารูปไหนถูกกดให้เพิ่ม Class active โดยการเปรียบเทียบค่า String ใน category กับ Element ใน menu_list แต่ละตัว */}
                            {/* item คือ Element ใน menu_list */}
                            <img className = {category===item.menu_name?"active":""} src={item.menu_image}/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
