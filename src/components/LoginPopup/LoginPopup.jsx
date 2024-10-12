import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    // เอาไว้จำว่าเรากดปุ่มสำหรับ Sign in หรือ Login เพื่อที่จะแสดง Form ให้ถูก
    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    {/* Title */}
                    <h2>{currState}</h2>
                    {/* ปุ่ม x */}
                    <img onClick = {()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {/* ถ้า State != Login ให้แสดง input field สำหรับกรอกชื่อไปด้วย */}
                    {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required />}
                    <input type="email" placeholder="Your Email" required/>
                    <input type="password" placeholder="Password" required />
                </div>
                {/* ถ้า State = Sign Up ให้แสดงปุ่ม Create Account ถ้าไม่ใช่ให้แสดง Login */}
                <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {/* ถ้า State = Login แสดง Create a new account ? ถ้าไม่ใช่ก็แสดงอีกอย่างนึง */}
                {currState==="Login"
                // ถ้ากดที่ span จะเปลี่ยน State
                ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
                :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup
