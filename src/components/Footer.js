import React from 'react'
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineGoogle, AiOutlineTwitter} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";
export default function Footer() {
    return (
        <footer>
        <div className="footer-container">
            <h1>Контакты</h1>
            <div className="fas">
                <a className="icon" style={{backgroundColor: "#3b5998"}} href="#"><FaFacebookF /></a>
                <a className="icon" style={{backgroundColor: "#55acee"}} href="#"><AiOutlineTwitter /></a>
                <a className="icon" style={{backgroundColor: "#dd4b39"}} href="#"><AiOutlineGoogle /></a>
                <a className="icon" style={{backgroundColor: "#ac2bac"}} href="#"><FiInstagram /></a>
            </div>
            <div className="numbers-address">
                <div className="numbers">
                    <p>+38(067) 547 89 20</p>
                    <p>+38(067) 547 89 21</p>
                </div>
                <div className="address">
                    Київ, бул.Шевченка 237 б
                </div>
            </div>
        </div>
        </footer>
    )
}