import React, { useCallback } from "react";

export default function Order({
                          name,
                          pictureSrc,
                          typeLabel,
                          totalPrice,
                          onRemove,
                          count = 1,
                          onCountChange,
                          size,
                          sizesList
                      }) {
    const handleIncrement = useCallback(() => onCountChange(count + 1), [
        onCountChange,
        count
    ]);
    const handleDecrement = useCallback(() => {
        if (count > 1) {
            onCountChange(count - 1);
        }
    }, [onCountChange, count]);

    return (
        <div className="order">
            <img src={pictureSrc} alt="" />
            <div className="pizzaName">
                <h2>{name}</h2>
                <p>
                    {typeLabel} тісто  /
                    {sizesList.map((obj,index)=>index===size?obj:"")}{size===26?26:""} см
                </p>
            </div>
            <div className="options">
                <div className="counter">
                    <span onClick={handleDecrement} className="minus-button" />
                    {count}
                    <span onClick={handleIncrement} className="plus-button" />
                </div>
                <div className="priceC">{totalPrice}₴</div>

                <div className="cl-btn-2">
                    <div onClick={onRemove}>
                        <div className="leftright" />
                        <div className="rightleft" />
                    </div>
                </div>
            </div>
        </div>
    );
}
