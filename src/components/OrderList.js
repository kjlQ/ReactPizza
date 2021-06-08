import React, { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Order } from "../components";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";

export default function OrdersList({ orderList , setOrderList }) {
    const totalCount = useMemo(
        () =>
            orderList.reduce((sum, order) => sum + (order.count ?? 1), 0),
        [orderList]
    );
    const totalPrice = useMemo(
        () =>
            orderList.reduce((sum, order) => sum + order.price * (order.count ?? 1), 0),
        [orderList]
    );

    const handleRemove = targetOrder => {
        setOrderList(orderList.filter(ord=> ord !== targetOrder))
    }
    const handleClear = () => {
        setOrderList(orderList.filter(ord=>ord.id=false))
    }
    const handleOrderCountChange = useCallback(
        (targetOrder, nextCount) => {
            const nextOrders = orderList.map((order) => {
                if (order === targetOrder) {
                    return {
                        ...order,
                        count: nextCount
                    };
                }
                return order;
            });
            setOrderList(nextOrders);
        },
        [setOrderList, orderList]
    );
    return(
        <div>
            <div className="label">
                <h1><FiShoppingCart /> Корзина</h1>
                <p onClick={()=>handleClear()}><BsFillTrashFill />Очистить корзину</p>
            </div>
            {orderList.map((item, index) =>
                <Order
                    price={item.price}
                    count = {item.count}
                    onCountChange={(nextCount) => handleOrderCountChange(item, nextCount)}
                    index = {index}
                    key={`${item}_${index}`}
                    order={item}
                    orders ={orderList}
                    remove={handleRemove} />)}
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
                        {orderList.map(obj=>console.log(obj))}
                    }}>Сплатити</p>
                </div>
            </div>
        </div>
    )
}
