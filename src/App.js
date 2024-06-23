import React, { Fragment, useEffect, useState } from "react"
import Header from './Layout/Header'
import './App.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cart from "./Components/Cart/Cart"
import { Redirect, Route, useLocation } from "react-router-dom/"
import HomePage from "./Pages/HomePage"
import MenuPage from "./Pages/MenuPage"
import Footer from "./Layout/Footer/Footer"
import ContactPage from "./Pages/ContactPage"

const App = () => {
  const location = useLocation()

  const[cartShow,setCartShow]=useState(false); 

  const cartShowHandler=()=>{
    setCartShow(true)
  }
  const cartCloseHandler=()=>{
    setCartShow(false)
  }

  useEffect(()=>{
    window.scroll(0,0)
  },[location])

  return (
    <Fragment>
      
       <Header cartShowHandler={cartShowHandler}/>

           <main>
           { cartShow  && <Cart cartCloseHandler={cartCloseHandler}/>}

          <Route path='/' exact> <Redirect to='/home'/> </Route>
          <Route path='/home' exact> <HomePage/> </Route>
          <Route path='/menu' exact> <MenuPage/> </Route>
          <Route path='/contact' exact> <ContactPage/> </Route>

           </main>


           <Footer/>
           
    </Fragment>
  )
}

export default App;


