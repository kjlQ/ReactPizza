import React from 'react'
export default function Pizzas({id,name,imageUrl,price,setId}) {
    return (
        <div className="pizza">
            <div className="onClick">
                <img src={imageUrl} alt="" />
                <h2>{name}</h2>
            </div>
            <div className="price">
                <p>Від {price}₴</p>
                <p><span onClick={()=>setId(id)} >+ Додати</span></p>
            </div>
        </div>
    )
}