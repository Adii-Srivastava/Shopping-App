import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { fetchUserDetails } from "../store/slices/usersSlice";

const UserDetails = () => {
    const { id } = useParams();
    const userId = Number(id);
    const dispatch = useDispatch<AppDispatch>();
    const { userDetails, status, error } = useSelector(
      (state: RootState) => state.users
    );

    useEffect(() => {
        if (!isNaN(userId)) {
          dispatch(fetchUserDetails(userId));
        }
      }, [dispatch, userId]);
    
      if (status === "loading") {
        return <div>Loading...</div>;
      }
    
      if (status === "failed") {
        return <div>Error: {error}</div>;
      }
    
      if (!userDetails) {
        return <div>User not found</div>;
      }

      return (
        <div>
          <div className="bg-pink-100 min-h-screen flex justify-center items-center p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-3/4 md:w-2/3 lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {userDetails.firstName} {userDetails.lastName}
              </h1>
    
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={userDetails.image}
                  alt={userDetails.title}
                  className="w-64 rounded-lg shadow-md"
                />
    
                <div className="flex-1">
                  <p className="text-gray-600 mb-2 font-bold">{userDetails.university}</p>
    
                  <p className="text-sm text-gray-700">
                    <strong>Age:</strong> {userDetails.age}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Role:</strong> {userDetails.role}
                  </p>
                  <p className="text-sm text-gray-700 flex items-center">
                    <strong>Email:</strong> {userDetails.email}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Gender:</strong> {userDetails.gender}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>D.O.B:</strong> {userDetails.birthDate}
                  </p>
    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default UserDetails;