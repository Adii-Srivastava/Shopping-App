import { Link } from 'react-router-dom';
import { Home, Package, Users, } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-2 text-white hover:text-blue-600">
              <Package size={20} />
              <span>Products</span>
            </Link>
            <Link to="/users" className="flex items-center space-x-2 text-white hover:text-blue-600">
              <Users size={20} />
              <span>Users</span>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;