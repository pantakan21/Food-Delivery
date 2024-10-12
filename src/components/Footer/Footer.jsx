import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className = "footer" id ="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis qui inventore exercitationem voluptates nihil consectetur. Corrupti neque similique in accusamus nulla quaerat blanditiis alias doloribus tenetur nesciunt deleniti ipsum aspernatur et ea exercitationem ullam officiis, dolore natus! Sit necessitatibus, corporis vel et nam eaque laborum deserunt, assumenda aut eius aliquam, nulla ipsa in ullam aperiam veritatis tempora nisi ea voluptas repellendus laudantium iusto corrupti. Perferendis reprehenderit totam qui ex aliquam eius quos illum temporibus, amet consectetur nisi expedita explicabo numquam facere tenetur nobis asperiores cupiditate et sequi. Facere quasi possimus consequuntur! Consequuntur inventore fuga, asperiores tenetur explicabo quas minus voluptatum.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>pantakanwork219@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com All Right Reserved.</p>
        </div>
    )
}

export default Footer
