import React, {useContext} from 'react';
import { PRODUCTS } from "./Products.js";
import { Product } from './Product';
import { ShopContext } from "./ShopContext";
import { CartItem } from './CartItem.jsx';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
  const {cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id]!==0) {
            return <CartItem data={product} />
          } 
        })}
      </div>
  {totalAmount > 0 ?
      <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    : <h1> Your Cart is Empty</h1>  }
    </div>
  )
}



// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import { Link } from 'react-router-dom';

// function Checkout() {
//   const [cart] = useContext(CartContext);

//   // const total = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/">Products</Link></li>
//           <li><Link to="/login">Log In</Link></li>
//         </ul>
//       </nav>
//       <div>
//       <h1>Checkout</h1>
//       <h3>Products:</h3>
//       <ul>
//       {cart.map((product, index) => (
//           <li key={index}>
//             {product.title} - ${product.price}
//           </li>
//         ))}
//       </ul>
//       <h3>Enter your Information:</h3>
//       <form action="">
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="text" placeholder="Address" />
//         <button type="submit">Complete Purchase</button>
//       </form>
//       </div>
      
     
//     </div>
//   );
// }

// export default Checkout;


// {/* <ul>
// {cart.map((item, index) => (
//   <li key={index}>
//     <img src={item.image} alt={item.title} width="50" />
//     <span>{item.title} - ${item.price}</span>
//   </li>
// ))}
// </ul>
// <h3>Total: ${total.toFixed(2)}</h3>
// <form>
// {/* ... Rest of the checkout form as in previous example ... */} 
// // </form> */}