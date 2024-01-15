import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About Us</a></li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
};

export default Navigation;
