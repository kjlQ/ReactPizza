import React from 'react'
export  default function Order({newOrders,index,remove}) {
    const availableSizes = [26,30,40]
    return (
        <div className="order">
            <img src={newOrders.img} alt=""/>
            <div className="pizzaName">
                <h2>{newOrders.name}</h2>
                <p>{newOrders.type == 0 && "тонке"}{newOrders.type == 1 && "стандартне"}  тісто / {availableSizes.map((item,index)=> index=== newOrders.size? item : "")} {newOrders.size===26 && 26} см</p>
            </div>
            <div className="options">
                <div className="counter">
                    <span className="minus-button"></span>1<span className="plus-button"></span>
                </div>
                <div className="priceC">
                    {newOrders.price}₴
                </div>

                <div className="cl-btn-2">
                    <div onClick={()=>remove(newOrders.id)}>
                        <div className="leftright"></div>
                        <div className="rightleft"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}