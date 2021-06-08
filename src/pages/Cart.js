import React from 'react'
import {HeaderWOcart,OrderList,EmptyCart} from "../components";
import {Link} from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import {IoIosArrowBack} from "react-icons/io"
import {BsFillTrashFill} from "react-icons/bs"
export default function Cart({ setOrderList, orderList }) {
    return (
        <>
            <HeaderWOcart />
            <div className="main">
                <div className="wrapper">
                    {orderList[0] ? <OrderList setOrderList={setOrderList} orderList={orderList} /> : <EmptyCart />}
                </div>
            </div>
        </>
    )
}