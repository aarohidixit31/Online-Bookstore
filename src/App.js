import { Routes, Route } from "react-router-dom";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Product from "./Customer/components/Product/Product.jsx";
import ProductDetails from "./Customer/components/ProductDetails/ProductDetails.jsx";
import Cart from "./Customer/components/Cart/Cart.jsx";
import Checkout from "./Customer/components/Checkout/Checkout.jsx";
import Order from "./Customer/components/Order/Order.jsx";
import OrderDetails from "./Customer/components/Order/OrderDetails.jsx";
import Footer from "./Customer/components/Footer/Footer.jsx";
import Navigations from "./Customer/components/Navigation/Navigation.jsx";
import AboutUs from "./Customer/Pages/AboutUS/AboutUs.jsx";
// ... other imports

function App() {
  return (
    <div className="App">
      <Navigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/about" element={<AboutUs />} />


      </Routes>
      <Footer />
    </div>
  );
}
export default App;
