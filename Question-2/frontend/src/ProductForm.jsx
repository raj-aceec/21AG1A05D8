import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';

const ProductForm = ({ setProducts }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        categories: '',
        minPrice: '',
        maxPrice: '',
        top: '1'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/products', formData);
            setProducts(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        setFormData({
            companyName: '',
            categories: '',
            minPrice: '',
            maxPrice: '',
            top: '1'
        });
    };

    // Generate options for top select field from 1 to 10
    const topOptions = [];
    for (let i = 1; i <= 10; i++) {
        topOptions.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div className="form-container">
            <h2>Product Search</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name:</label>
                    <select
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a company</option>
                        <option value="AMZ">AMZ</option>
                        <option value="FLP">FLP</option>
                        <option value="SNP">SNP</option>
                        <option value="MYN">MYN</option>
                        <option value="AZO">AZO</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories:</label>
                    <select
                        id="categories"
                        name="categories"
                        value={formData.categories}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Phone">Phone</option>
                        <option value="Computer">Computer</option>
                        <option value="TV">TV</option>
                        <option value="Earphone">Earphone</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Charger">Charger</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Keypad">Keypad</option>
                        <option value="Bluetooth">Bluetooth</option>
                        <option value="Pendrive">Pendrive</option>
                        <option value="Remote">Remote</option>
                        <option value="Speaker">Speaker</option>
                        <option value="Headset">Headset</option>
                        <option value="Laptop">Laptop</option>
                        <option value="PC">PC</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="minPrice">Min Price:</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        value={formData.minPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxPrice">Max Price:</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        value={formData.maxPrice}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="top">Top:</label>
                    <select
                        id="top"
                        name="top"
                        value={formData.top}
                        onChange={handleChange}
                        required
                    >
                        {topOptions}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
