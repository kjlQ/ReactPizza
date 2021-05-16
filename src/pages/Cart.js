import React , {useEffect} from 'react'
import {HeaderWOcart} from "../components";
import Order from '../components/Order'
export default function Cart({order}) {
    const [newOrder,setNewOrder]=React.useState([...order])
    return (
        <>
            <HeaderWOcart />
            <button onClick={()=>console.log(newOrder)}>123</button>
            <div className="main">
                <div className="wrapper">
                    <div className="label">
                        <h1><i className="fas fa-shopping-cart"></i> Корзина</h1>
                        <p><i className="fas fa-trash-alt"></i>Очистить корзину</p>
                    </div>
                    {order.map((item, index) => <Order index = {index} key={`${item}_${index}`} order={item} orders ={order} setNewOrder={setNewOrder} />)}
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