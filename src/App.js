import './App.css';
import Navigations from './Customer/components/Navigation/Navigation';
import Carousel from './Customer/components/HomeCarousel/MainCarousel';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/components/Footer/Footer';
import Product from './Customer/components/Product/Product.jsx';
import ProductDetails from './Customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './Customer/components/Cart/Cart';
// import Cart from './Customer/components/Cart/cart.jsx';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Customer/components/Checkout/Checkout';
import Order from './Customer/components/Order/Order.jsx';
import OrderDetails from './Customer/components/Order/OrderDetails.jsx';
import CustomerRouters from './Routers/CustomerRouters.jsx';




function App() {
  return (
    <div className="App">
      <div className=''>
          <Navigations/>
          <HomePage/> 
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Cart/> */}
          <Routes>
          {/* Define your app routes here */}
          {/* Example: */}
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path='/*' element={<CustomerRouters/>}></Route> */}
        </Routes>
          {/* <Checkout/> */}
          {/* <Order/> */}
          {/* <OrderDetails/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
