import React from 'react'
import {Link} from 'react-router-dom'
export default function emptyCart() {
    return (
        <div className="empty">
            <h1>
                Корзина порожня 🙁
            </h1>
            <div className="text"><p>Вірогідно, ви ще не замовлял піцу.Для того, щоб замовити піцу, потрібно перейти
                на головну сторінку.</p></div>
            <img src="img/empty.jpg" alt=""/>
                <div className="button">
                    <p>
                        <Link to="/">Повернутися на головну</Link>
                    </p>
                </div>
        </div>
    )
}