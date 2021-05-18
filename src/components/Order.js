import React from 'react'
export  default function Order({order,remove,setTotalPrice,setTotalCount}) {
    const availableSizes = [26,30,40]
    const [counter,setCounter]= React.useState(1);
    const [price,setPrice]= React.useState(order.price);
    const dec = count => {
            count>1 && setCounter(prevCount => prevCount - 1)
            count>1 && setTotalCount(prevCount=> prevCount -1)
            price>order.price && setPrice(prevPrice=>prevPrice-order.price)
            price>order.price && setTotalPrice(prevPrice =>prevPrice - order.price)
    }
    const inc = () => {
        setCounter(prevCount => prevCount + 1)
        setTotalCount(prevCount=> prevCount +1)
        setPrice(prevPrice=>prevPrice+order.price)
        setTotalPrice(prevPrice =>prevPrice + order.price)
    }
    React.useEffect(()=> {
        setTotalPrice(prevPrice =>prevPrice + price)
        setTotalCount(prevPrice =>prevPrice + counter)
    },[])
    return (
        <div className="order">
            <img src={order.img} alt=""/>
            <div className="pizzaName">
                <h2>{order.name}</h2>
                <p>{order.type == 0 && "тонке"}{order.type == 1 && "стандартне"}  тісто / {availableSizes.map((item,index)=> index=== order.size? item : "")} {order.size===26 && 26} см</p>
            </div>
            <div className="options">
                <div className="counter">
                    <span onClick={()=>dec(counter)} className="minus-button"></span>{counter}<span onClick={()=>inc()} className="plus-button"></span>
                </div>
                <div className="priceC">
                    {price}₴
                </div>

                <div className="cl-btn-2">
                    <div onClick={()=>remove(order.id,counter,price)}>
                        <div className="leftright"></div>
                        <div className="rightleft"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}