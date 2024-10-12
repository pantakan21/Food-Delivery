import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
    // State เอาไว้เก็บว่าปุ่ม Sign In / Login ถูกกดหรือไม่(เอาไปใช้หน้า Navbar.jsx, LoginPopup.jsx)
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
        {/* ถ้าถูกกดให้แสดง LoginPopup ขึ้นมา */}
        {/* ผูก setShowLogin ของหน้านี้กับหน้า LoginPopup.jsx เข้าด้วยกัน */}
        {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
            <div className = "app">
                {/* ผูกค่า setShowLogin ของหน้านี้กับหน้า Navbar.jsx เข้าด้วยกัน */}
                <Navbar setShowLogin = {setShowLogin}/>
                <Routes>
                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/cart" element = {<Cart/>}/>
                    <Route path = "/order" element = {<PlaceOrder/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
