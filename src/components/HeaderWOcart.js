import React from "react";
import { Link } from 'react-router-dom'
import { FaShoppingCart } from  'react-icons/fa'
export default function HeaderWOcart() {
    return (
        <header>
            <div className="header-top">
                <Link to="/">
                    <div className="logo">
                        <img src="img/logo.jpg" alt="" />
                        <div className="logo-text">
                            <h2>Mermaid's song</h2>
                            <p>Найсмачніша піца в галактиці</p>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    )
}