import React from 'react'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import { Route,Routes } from 'react-router-dom'
import Cart from '../Customer/components/Cart/Cart'
import Navigations from '../Customer/components/Navigation/Navigation'
import Footer from '../Customer/components/Footer/Footer'
import Product from '../Customer/components/Product/Product'
import ProductDetails from '../Customer/components/ProductDetails/ProductDetails'
import Checkout from '../Customer/components/Checkout/Checkout'
import OrderDetails from '../Customer/components/Order/OrderDetails'
import Order from '../Customer/components/Order/Order'
const CustomerRouters = () =>{
    return(
        <div>
            <div>
                <Navigations/>
            </div>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/:orderId' element={<OrderDetails/>}></Route>
            </Routes>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default CustomerRouters