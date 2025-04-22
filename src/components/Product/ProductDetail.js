import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://admin.refabry.com/api/all/product/get/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full h-96 object-cover"
      />
      <h3 className="text-3xl font-bold mt-4">{product.name}</h3>
      <p className="text-lg mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
