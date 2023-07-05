import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
    return ( <div className="nav">
            <div className="links nav ul">
                <Link to="/" className="nav ul li nav a"> Shop </Link>
                <Link to="/login">Login</Link>
                <Link to="/cart" className="nav ul li"> 
                <ShoppingCart size={32}/>
                </Link>
            </div>

    </div>
)
}