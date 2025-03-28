import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import UserDetails from './pages/UserDetails';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ebc9eb]">
        <Navbar />
        <main className=" w-full min-h-screen ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;