import React from 'react';
import './Products.css';

const Products = ({ products }) => {
    return (
        <div className="products-container">
            <h1>Products</h1>
            <div className="products-grid">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <h2>{product.productName}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}%</p>
                        <p className={`availability ${product.availability === 'out-of-stock' ? 'out-of-stock' : ''}`}>
                            Availability: {product.availability}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
