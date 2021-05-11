import{ Header ,Menu ,  Footer } from './components/index'
import {Home , Cart} from './pages'
import './App.css'
import { style1450 , style1000 , style700 , style400 , style350} from "./media";
import React from "react";
import {Route} from "react-router-dom";
export default function App() {
  return (
      <>
          <div className="main">
              <Header />
              <Route exact path ="/" component={Home} />
              <Route exact path ="/cart" component={Cart} />
              <Footer />
          </div>
      </>
  );
}

