import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import ErrorBoundary from './components/ErrorBoundary';  // Import the ErrorBoundary component

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
