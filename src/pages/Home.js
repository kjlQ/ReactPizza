import React ,{useState , useEffect } from 'react'
import {Menu , PizzaBlock} from "../components";
import TEST from "../components/TEST"
import Cart from "./Cart";
import {render} from "@testing-library/react";
export default function Home() {
    const [pizza,setPizza] = useState([])
    const [index,setIndex] = useState(0)
    const menu = ["Все","Мьясные", "Вегатерианские", "Гриль", "Острые", "Комбо"]
    useEffect(()=>{
        fetch('http://localhost:3000/db.json').then((resp)=>resp.json()).then(json=>setPizza(json.pizzas))
    },[index])
    const click = (index) => {
        {
            index === 1 && setPizza(prevPizza => [...prevPizza].sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
        }
        {
            index === 0 && setPizza(prevPizza => [...prevPizza].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)))
        }
        {
            index === 2 && setPizza(prevPizza => [...prevPizza].sort((a, b) => parseFloat(b.price) - parseFloat(a.price)))
        }
    }

    return (
        <>

            <Menu changePizzaType={num=> setIndex(num)}  click={click} menu = {menu} />
            <div className="product">
                <h1> {menu.map((word,num)=> num===index? word : " ")} пиццы</h1>
                <div className="Pizzas">
                    {pizza.map(obj=> obj.category.map(numbers=>numbers === index? <PizzaBlock key={obj.id} {...obj}/>:""))}
                </div>
            </div>
        </>
    )
}