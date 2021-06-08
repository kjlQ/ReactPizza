import React , {useCallback} from 'react'
export  default function Order({order,remove, onCountChange , count = 1 , price}) {
    const availableSizes = [26,30,40]
    const inc = useCallback(() => onCountChange(count + 1), [
        onCountChange,
        count
    ]);
    const dec = useCallback(() => {
        if (count > 1) {
            onCountChange(count - 1);
        }
    }, [onCountChange, count]);
    return (
        <div className="order">
            <img src={order.img} alt=""/>
            <div className="pizzaName">
                <h2>{order.name}</h2>
                <p>{order.type == 0 && "тонке"}{order.type == 1 && "стандартне"}  тісто / {availableSizes.map((item,index)=> index=== order.size? item : "")} {order.size===26 && 26} см</p>
            </div>
            <div className="options">
                <div className="counter">
                    <span onClick={()=>dec()} className="minus-button"></span>{count}<span onClick={()=>inc()} className="plus-button"></span>
                </div>
                <div className="priceC">
                    {price*count}₴
                </div>

                <div className="cl-btn-2">
                    <div onClick={()=>remove(order)}>
                        <div className="leftright"></div>
                        <div className="rightleft"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}