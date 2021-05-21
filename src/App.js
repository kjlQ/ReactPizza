import{ Header ,Menu ,  Footer , HeaderWOcart } from './components/index'
import {Home , Cart} from './pages'
import {AppCSS,cartCSS,emptyCartCSS} from "./CSS";
import { style1450 , style1000 , style700 , style400 , style350} from "./media";
import { media1200 , media450 , media400 , media350} from "./cartMedia";
import { emedia768 , emedia500 , emedia400 } from "./emptyCartMedia";
import React from "react";
import {Route} from "react-router-dom";
export default function App() {
    const [orderList,setOrderList]=React.useState([])
    return (
        <div className="main">
            <button onClick={()=>console.log(orderList)}></button>
            <Route exact path ="/" render={()=> <Home setOrderList={setOrderList} />} />
            <Route exact path ="/cart" render={()=> <Cart setOrderList={setOrderList} orders={orderList} />} />
            <Footer />
        </div>
    )}