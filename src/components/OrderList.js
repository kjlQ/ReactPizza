import React, { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Order } from "../components";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";

export default function OrdersList({ orders, setOrderList }) {
    const totalCount = useMemo(
        () => orders.reduce((sum, order) => sum + (order.count ?? 1), 0),
        [orders]
    );
    const totalPrice = useMemo(
        () =>
            orders.reduce((sum, order) => sum + order.price * (order.count ?? 1), 0),
        [orders]
    );

    const handleRemoveOrder = useCallback(
        (targetOrder) => {
            setOrderList(orders.filter((order) => order !== targetOrder));
        },
        [setOrderList, orders]
    );
    const handleOrderCountChange = useCallback(
        (targetOrder, nextCount) => {
            const nextOrders = orders.map((order) => {
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
        [setOrderList, orders]
    );

    const renderOrderItem = useCallback(
        (order) => (
            <Order
                key={order.id}
                name={order.name}
                typeLabel={TypeToLabel[order.type]}
                size={order.size}
                sizesList={SIZES_LIST}
                totalPrice={order.price * (order.count ?? 1)}
                pictureSrc={order.img}
                onRemove={() => handleRemoveOrder(order)}
                onCountChange={(nextCount) => handleOrderCountChange(order, nextCount)}
                count={order.count}
            />
        ),
        [handleRemoveOrder, handleOrderCountChange]
    );

    const handleClear = useCallback(() => setOrderList([]), [setOrderList]);
    const handleSubmit = useCallback(() => {
        console.log("SUBMIT:", orders);
    }, [orders]);

    return (
        <div>
            <div className="label">
                <h1>
                    <FiShoppingCart /> Корзина
                </h1>
                <p onClick={handleClear}>
                    <BsFillTrashFill />
                    Очистить корзину
                </p>
            </div>
            {orders.map(renderOrderItem)}
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
                    <p>
                        <Link to="/">
                            <IoIosArrowBack /> Повернутися
                        </Link>
                    </p>
                </div>
                <div className="pay">
                    <p onClick={handleSubmit}>Сплатити</p>
                </div>
            </div>
        </div>
    );
}

const TypeToLabel = ["тонке", "стандартне"];
const SIZES_LIST = [26, 30, 40];
