import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from '../../features/productSlice'; // Redux actions
import ProductCard from './ProductCard'; // Product card component

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items); // Ensure 'items' matches your slice
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const response = await axios.get('https://admin.refabry.com/api/all/product/get');
        console.log('API Response:', response);
        console.log('Raw Data:', response.data);

        const productData = response.data.data;
        console.log('Product Data:', productData);

        if (productData && Array.isArray(productData)) {
          dispatch(setProducts(productData));
          console.log('Products dispatched to Redux:', productData); // Added log
        } else {
          console.error('Error: Product data is empty or malformed.');
          dispatch(setProducts([]));
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        dispatch(setError(error));
        dispatch(setProducts([]));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  console.log('Products from Redux in render:', products); // Added log

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message || 'Something went wrong.'}</div>;
  }

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;