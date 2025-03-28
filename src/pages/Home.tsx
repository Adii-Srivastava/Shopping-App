import  { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch,RootState } from '../store/store';
import { fetchProducts } from '../store/slices/productsSlice';
import { TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.products);
  const limit=15;
  const [page, setPage] = useState(1);
  const navigate= useNavigate()
  useEffect(() => {
    dispatch(fetchProducts({ skip: (page - 1) * limit, limit }));
  }, [dispatch, page]);



  return (
  <>
    <section className="relative w-full min-h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      <div className="max-w-3xl text-center">
        <motion.h1
          className="text-5xl font-bold sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevate Your Shopping Presence
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Buy stunning and modern products with cutting-edge price.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* <Button className="px-6 py-3 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-200">
            Get Started <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
            Learn More
          </Button> */}
        </motion.div>
      </div>
    </section>
    <div className='mt-1 min-h-[500px]'>
       <h1 className="text-4xl font-bold text-black text-center mt-4 flex justify-center"> Our Trending Products <span className='mx-2 mt-2 size-15'> <TrendingUp/> </span> </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(6,9).map((product: any) => (
          <div key={product.id} className="bg-black hover:cursor-pointer rounded-xl mt-6 p-4 mx-2 shadow-gray-500 shadow-md ">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-white text-center">{product.title}</h2>
            {/* <p className="text-white mb-2 text-justify tracking-tight leading-relaxed max-w-prose">{product.description}</p> */}
            {/* <p className="text-2xl font-bold text-white text-center">${product.price}</p> */}
            <button className='w-full p-2 bottom-1 bg-blue-400 rounded hover:bg-blue-500 ' onClick={() => navigate(`/products/${product.id}`)}>See Details</button>
          </div>
        ))}
       </div>

       <div className="flex justify-center mt-6">
        <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-2xl shadow-md shadow-gray-500 hover:bg-gray-900 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
          <Link to="/products">All Products</Link>
              
          <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
       </div>


    </div>
  </>
    
  );
}

export default Home;