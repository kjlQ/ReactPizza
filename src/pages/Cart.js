import React from "react";
import { HeaderWOcart, EmptyCart } from "../components";
import OrdersList from '../components/OrderList'
export default function Cart({ orders, setOrderList }) {
    return (
        <>
            <HeaderWOcart />
            <div className="main">
                <div className="wrapper">
                    {orders.length>0 ? (
                        <OrdersList orders={orders} setOrderList={setOrderList} />
                    ) : (
                        <EmptyCart />
                    )}
                </div>
            </div>
        </>
    );
}
