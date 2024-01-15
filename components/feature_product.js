import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from your Strapi backend
        axios.get('YOUR_STRAPI_API_ENDPOINT/products').then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <section>
            <h2>Featured Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image.url} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
