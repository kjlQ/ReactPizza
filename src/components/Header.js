import React from "react";
import { Link } from 'react-router-dom'
import { FaShoppingCart } from  'react-icons/fa'
export default function Header() {
    return (
           <header>
               <div className="header-top">
                   <Link to="/">
                       <div className="logo">
                           <img src="img/logo.jpg" alt="" />
                           <div className="logo-text">
                               <h2>Mermaid's song</h2>
                               <p>Вкуснейшая пицца во вселенной</p>
                           </div>
                       </div>
                   </Link>
                   <Link to="/cart">
                       <div className="cart">
                           <p className="tcart">0 ₴<span> | </span><FaShoppingCart /> 0</p>
                           <p className="mcart"><FaShoppingCart /><span>0</span></p>
                       </div>
                   </Link>
               </div>
           </header>
    )
}