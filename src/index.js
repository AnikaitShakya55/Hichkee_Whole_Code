import ReactDom from "react-dom"; 

import App from './App' 
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CartProvider from "./Store/CartProvider";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


ReactDom.render(

 <BrowserRouter basename='/HichkeeRestaurant'>
 <CartProvider>
<App/>
</CartProvider>
</BrowserRouter>   
,document.getElementById('root'));   