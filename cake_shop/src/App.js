
import './App.css';
import Header from "../src/components/common/Header"
import Footer from '../src/components/common/Footer';
import Home from '../src/components/pages/Home';
import Products from "../src/components/pages/HeaderContent/Product/Products"
import About from "../src/components/pages/HeaderContent/about/About"
import History from "../src/components/pages/HeaderContent/History/History"
import Franchise from "../src/components/pages/HeaderContent/Franchise/Franchise"
import Blogs from "../src/components/pages/HeaderContent/Blogs/Blogs"
import WeddingCakes from "../src/components/pages/HeaderContent/WeddingCakes/WeddingCakes"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/wedding-cakes" element={<WeddingCakes />} />
      </Routes>
    </Router>


    <Home/>
    <Footer/>
  </div>
  );
}

export default App;
