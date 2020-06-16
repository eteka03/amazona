import React from 'react'
import {
    Link
} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

export default function Header({ToggleMenu}) {
    return (
        <header className="header">
        <div className="brand">
            <button className="brand-button" onClick={ToggleMenu}>
                &#9776;
            </button>
            <Link to="/">amazona</Link>
            
           
           
        </div>

        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>

    </header>
    )
}
