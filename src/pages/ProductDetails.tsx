import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { fetchProductDetails } from "../store/slices/productsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const dispatch = useDispatch<AppDispatch>();
  const { productDetails, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!isNaN(productId)) {
      dispatch(fetchProductDetails(productId));
    }
  }, [dispatch, productId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="bg-pink-100 min-h-screen flex justify-center items-center p-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-3/4 md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {productDetails.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={productDetails.thumbnail}
              alt={productDetails.title}
              className="w-64 rounded-lg shadow-md"
            />

            <div className="flex-1">
              <p className="text-gray-600 mb-2">{productDetails.description}</p>

              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xl text-red-500 font-bold">
                  $
                  {productDetails.price -
                    (productDetails.price * productDetails.discountPercentage) /
                      100}
                </span>
                <span className="line-through text-gray-500">
                  ${productDetails.price}
                </span>
                <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded-lg text-xs">
                  {productDetails.discountPercentage}% Off
                </span>
              </div>

              <p className="text-sm text-gray-700">
                <strong>Brand:</strong> {productDetails.brand}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Category:</strong> {productDetails.category}
              </p>
              <p className="text-sm text-gray-700 flex items-center">
                ⭐ {productDetails.rating} / 5
              </p>
              <p className="text-sm text-gray-700">
                <strong>Return Policy:</strong> {productDetails.returnPolicy}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Shipping:</strong> {productDetails.shippingInformation}
              </p>

              <div className="mt-3">
                <button className="w-full p-2 bottom-1 bg-blue-400 rounded hover:bg-blue-500 ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
