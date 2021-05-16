import{ Header ,Menu ,  Footer , HeaderWOcart } from './components/index'
import {Home , Cart} from './pages'
import './App.css'
import './cartCSS.css'
import { style1450 , style1000 , style700 , style400 , style350} from "./media";
import { media1200 , media450 , media400 , media350} from "./cartMedia";
import React from "react";
import {Route} from "react-router-dom";
export default function App() {
    const [order,setOrders]=React.useState([])
  return (
          <div className="main">
              <Route exact path ="/" render={()=> <Home setOrder={setOrders} />} />
              <Route exact path ="/cart" render={()=><Cart setOrders={setOrders} order={order} />} />
              <Footer />
          </div>
  )}
