import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProductDetail from "./routes/ProductDetail";
import Comparison from "./routes/Comparison";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="shop" element={<Shop />}></Route>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="comparison" element={<Comparison />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
