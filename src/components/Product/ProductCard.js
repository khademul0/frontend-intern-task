import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="mt-1 text-gray-500">{product.description}</p>
      <p className="mt-2 font-bold text-lg">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;