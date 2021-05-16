import React , {useEffect} from 'react'
import {HeaderWOcart} from "../components";
import Order from '../components/Order'
export default function Cart({order,setOrders}) {
    const remove = id => {
        const newOrd = order.filter(ord=>ord.id!=id)
        setOrders(newOrd)
    }
    return (
        <>
            <HeaderWOcart />
            <button onClick={()=>console.log(order)}>123</button>
            <div className="main">
                <div className="wrapper">
                    <div className="label">
                        <h1><i className="fas fa-shopping-cart"></i> Корзина</h1>
                        <p><i className="fas fa-trash-alt"></i>Очистить корзину</p>
                    </div>
                    {order.map((item, index) => <Order index = {index} key={`${item}_${index}`} newOrders={item} orders ={order} remove={remove} />)}
                    <div className="returnPay">
                        <div className="return">
                            <p><i className="fas fa-angle-left"></i> Повернутися</p>
                        </div>
                        <div className="pay">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}