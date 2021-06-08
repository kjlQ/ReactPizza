import React ,{useState , useEffect } from 'react'
import {Header, Menu, PizzaBlock} from "../components";
import Warehouse from "../components/Warehouse";
export default function Home({setOrderList}) {
    const [pizza,setPizza] = useState([])
    const [index,setIndex] = useState(0)
    const [id,setId] = useState()
    const menu = ["Всі","М'ясні", "Вегатеріанські", "Гриль", "Гострі", "Комбо"]
    useEffect(()=>{
        fetch('/db.json')
            .then((resp)=>resp.json())
            .then(json=>setPizza(json.pizzas))
    },[])
    const click = (index) => {
        {index === 0 && setPizza(prevPizza => [...prevPizza].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating)))}
        {index === 1 && setPizza(prevPizza => [...prevPizza].sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))}
        {index === 2 && setPizza(prevPizza => [...prevPizza].sort((a, b) => parseFloat(b.price) - parseFloat(a.price)))}
    }
    const items = (name,type,size,price,img,id) => {
        if (name === '') return
        setOrderList(prevOrder => [...prevOrder, {name: name, type: type, size: size, price: price, img: img, id: id}])
    }
    const changeFlag = id => {
        setId(id)
    }
    return (
        <>
            <Header />
            <Menu changePizzaType={num=> setIndex(num)}  click={click} menu = {menu} />
            {pizza.map(obj=>obj.id===id?<Warehouse items={items} key = {obj.id} {...obj} changeFlag={changeFlag} />:"")}
            <div className="product">
                <h1> {menu.map((word,num)=> num===index? word : " ")} піци</h1>
                <div className="Pizzas">
                    {pizza.map(obj=> obj.category.map(numbers=>numbers === index? <PizzaBlock changeFlag={changeFlag} key={obj.id} {...obj}/>:""))}
                </div>
            </div>

        </>
    )
}