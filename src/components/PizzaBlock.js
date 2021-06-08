import React from 'react'
export default function Pizzas({id,name,imageUrl,price,changeFlag}) {
    return (
        <div className="pizza">
            <div className="ifClick">
                <img src={imageUrl} alt="" />
                <h2>{name}</h2>
            </div>
            <div className="price">
                <p>Від {price}₴</p>
                <p><span onClick={()=>changeFlag(id)} >+ Додати</span></p>
            </div>
        </div>
    )
}