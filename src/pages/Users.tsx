import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchUsers } from '../store/slices/usersSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, total } = useSelector((state: RootState) => state.users);
  const [page, setPage] = useState(1);
  const navigate= useNavigate();
  const limit = 12;

  useEffect(() => {
    dispatch(fetchUsers({ skip: (page - 1) * limit, limit }));
  }, [dispatch, page]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading users</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((user: any) => (
          <div key={user.id} className="bg-black rounded-lg shadow p-6 mx-2">
            <img src={user.image} alt={user.firstName} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center text-white">{`${user.firstName} ${user.lastName}`}</h2>
            <p className="text-white text-center mb-2">{user.email}</p>
            <div className="text-sm text-white text-center">
              <p>{user.phone}</p>
              <button onClick={() => navigate(`/users/${user.id}`)} className='w-full p-2 bottom-1 bg-blue-400 rounded hover:bg-blue-500 mt-2 '>See User Details</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="flex items-center px-4 py-2 bg-black text-white rounded disabled:bg-gray-300"
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

export default Users;