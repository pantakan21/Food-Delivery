import React, { useContext, useState } from 'react';
import "./Navbar.css";
import {assets} from "../../assets/assets";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

// รับ Props setShowLogin
const Navbar = ({setShowLogin}) => {
    // State นี้เอาไว้ทำเส้นใต้แต่ละเมนูว่าอยู่เมนูไหน
    const [menu, setMenu] = useState("Home");
    // รับ getTotalCartAmount จาก Context มาใช้
    const {getTotalCartAmount} = useContext(StoreContext);

    return (
        <div className="navbar">
            <Link to = "/"><img src={assets.logo} className="logo" /></Link>
            <ul className="navbar-menu">
                {/* ถ้า Menu ถูกคลิกให้เปลี่ยนค่า State และเปรียบเทียบว่า State ปัจจุบันเป็นของปุ่มไหนถ้าเป็นของปุ่มนั้น ๆ ให้ใช้ Class active แต่ถ้าไม่ก็ไม่ต้องมี Class เพิ่ม */}
                <Link to="/" onClick={()=>setMenu("home")} className = {menu==="home"?"active":""}>Home</Link>
                <a href="#explore-menu" onClick={()=>setMenu("menu")} className = {menu==="menu"?"active":""}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu("mobile-app")} className = {menu==="mobile-app"?"active":""}>Mobile-App</a>
                <a href="#footer" onClick={()=>setMenu("contact-us")} className = {menu==="contact-us"?"active":""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to = "/cart"><img src={assets.basket_icon} alt="" /></Link>
                    {/* ฟังก์ชั่นที่เอาไว้รวมราคาสินค้าในตะกร้าจาก Context โค้ดนี้เอาไว้เลือกว่าจะแสดงปุ่มบนตระกร้าหรือไม่ */}
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                {/* ถ้าปุ่มถูกกดให้ setShowLogin = true */}
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;