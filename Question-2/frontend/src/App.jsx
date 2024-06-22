import React, { useState } from 'react';
import ProductForm from './ProductForm';
import Products from './Products';

function App() {
    const [products, setProducts] = useState([]);

    return (
        <div className="App">
            <ProductForm setProducts={setProducts} />
            <Products products={products} />
        </div>
    );
}

export default App;
