import React from 'react'
export  default function Order({order,index,orders,setNewOrder}) {
    const availableSizes = [26,30,40]
    const remove = index => {
        setNewOrder(delete orders[index])
    }
    return (
        <div className="order">
            <img src={order.img} alt=""/>
            <div className="pizzaName">
                <h2>{order.name}</h2>
                <p>{order.type == 0 && "тонке"}{order.type == 1 && "стандартне"}  тісто / {availableSizes.map((item,index)=> index=== order.size? item : "")} {order.size===26 && 26} см</p>
            </div>
            <div className="options">
                <div className="counter">
                    <span className="minus-button"></span>1<span className="plus-button"></span>
                </div>
                <div className="priceC">
                    {order.price}₴
                </div>

                <div className="cl-btn-2">
                    <div onClick={()=>remove(index)}>
                        <div className="leftright"></div>
                        <div className="rightleft"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}