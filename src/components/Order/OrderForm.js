import axios from 'axios';
import React, { useState } from 'react';

const OrderForm = ({ productIds }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [codAmount, setCodAmount] = useState('');
  const [sProductQty, setSProductQty] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      product_ids: productIds,
      s_product_qty: sProductQty,
      c_phone: phone,
      c_name: name,
      courier: 'steadfast',
      address: address,
      cod_amount: codAmount,
      discount_amount: null,
      delivery_charge: '80',
    };

    axios
      .post('https://admin.refabry.com/api/public/order/create', orderData)
      .then((response) => alert('Order placed successfully!'))
      .catch((error) => console.error('Error placing order:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full p-2 mt-2 border rounded"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className="w-full p-2 mt-2 border rounded"
      />
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        className="w-full p-2 mt-2 border rounded"
      />
      <input
        type="text"
        value={sProductQty}
        onChange={(e) => setSProductQty(e.target.value)}
        placeholder="Product Quantities (comma separated)"
        className="w-full p-2 mt-2 border rounded"
      />
      <input
        type="text"
        value={codAmount}
        onChange={(e) => setCodAmount(e.target.value)}
        placeholder="COD Amount"
        className="w-full p-2 mt-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 mt-4 rounded">
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
