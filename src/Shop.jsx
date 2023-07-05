import React from 'react';
import { PRODUCTS } from "./Products.js";
import { Product } from "./Product.jsx"

export const Shop = () => {
  return (
    <div className='shop'>
    <div className='shopTitle'>
      <h1>Amin Ambike's E-commerce Shop</h1>
    </div>
    <div className='products'> 
    {" "}
    {PRODUCTS.map((product) => (
      <Product data={product}/>
    ))}
    </div>
    </div>
  )
}



// import React, { useState } from 'react';
// import Product from './Product';
// import CreateArea from './CreateArea';
// import { Link } from 'react-router-dom';

// const products = [
//   {
//     id: 1,
//     title: 'Product 1',
//     description: 'This is product 1',
//     price: 10.0,
//     image: 'url_to_image_1',
//   },
//   {
//     id: 2,
//     title: 'Product 2',
//     description: 'This is product 2',
//     price: 20.0,
//     image: 'url_to_image_2',
//   },
// ];

// function Products() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/checkout">Checkout</Link></li>
//           <li><Link to="/login">Log In</Link></li>
//         </ul>
//       </nav>
//       <div className="products">
//         {products.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
