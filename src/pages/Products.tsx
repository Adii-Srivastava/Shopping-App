import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchProducts } from '../store/slices/productsSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, total } = useSelector((state: RootState) => state.products);
  const [page, setPage] = useState(1);
  const navigate= useNavigate();
  const limit = 12;

  useEffect(() => {
    dispatch(fetchProducts({ skip: (page - 1) * limit, limit }));
  }, [dispatch, page]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-8">Products</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((product: any) => (
          <div key={product.id}  className="bg-black hover:cursor-pointer rounded-xl mt-6 mx-2 p-4 shadow-xl transition-transform duration-300 hover:translate-y-2 hover:translate-z-2">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-white text-center">{product.title}</h2>
            {/* <p className="text-white mb-2 text-justify tracking-tight leading-relaxed max-w-prose">{product.description}</p> */}
            <p className="text-2xl font-bold text-white text-center">${product.price}</p>
            <button onClick={() => navigate(`/products/${product.id}`)} className='w-full p-2 bottom-1 bg-blue-400 rounded hover:bg-blue-500 '>See Details</button>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="flex items-center px-4 py-2 bg-black text-white rounded disabled:bg-gray-400"
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <span className="text-gray-600">
          Page {page} of {Math.ceil(total / limit)}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= Math.ceil(total / limit)}
          className="flex items-center px-4 py-2 bg-black text-white rounded disabled:bg-gray-300"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Products;