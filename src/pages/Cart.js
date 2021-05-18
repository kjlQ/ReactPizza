import React from 'react'
import {HeaderWOcart,Order,EmptyCart} from "../components";
import {Link} from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import {IoIosArrowBack} from "react-icons/io"
import {BsFillTrashFill} from "react-icons/bs"
export default function Cart({order,setOrders}) {
    const [totalPrice,setTotalPrice] = React.useState(0)
    const [totalCount,setTotalCount] = React.useState(0)
    const remove = (id,counter,price) => {
        setOrders(order.filter(ord=> ord.id != id))
        setTotalCount(prev=>prev-counter)
        setTotalPrice(prev=>prev-price)
    }
    const removeAll = id => {
        const newOrd = order.filter(ord=>ord.id=false)
        setOrders(newOrd)
    }
    return (
        <>
            <HeaderWOcart />
            <div className="main">
                <div className="wrapper">
                    {order[0] ? <div>
                        <div className="label">
                            <h1><FiShoppingCart /> Корзина</h1>
                            <p onClick={()=>removeAll()}><BsFillTrashFill />Очистить корзину</p>
                        </div>
                        {order.map((item, index) => <Order setTotalCount={setTotalCount} setTotalPrice={setTotalPrice} index = {index} key={`${item}_${index}`} order={item} orders ={order} remove={remove} />)}
                        <div className="total">
                            <div className="totalCount">
                                Всього піц:<span>{totalCount}шт</span>
                            </div>
                            <div className="totalPrice">
                                Сума замовлення: <span>{totalPrice}₴</span>
                            </div>
                        </div>
                        <div className="returnPay">
                            <div className="return">
                                <p><Link to="/"><IoIosArrowBack /> Повернутися</Link></p>
                            </div>
                            <div className="pay">
                                <p onClick={()=>{
                                    console.log("Ваше замовлення")
                                    {order.map(obj=>console.log(obj))}
                                }}>Сплатити</p>
                            </div>
                        </div>
                    </div> : <EmptyCart />}
                </div>
            </div>
        </>
    )
}