import React,{useState} from 'react'


export default function Sidebar({isMenuOpen,ToggleMenu}) {

    

    return (
        <aside className={`sidebar ${isMenuOpen ? 'open' : ' '}`}>
        <h3>Categories</h3>
        <button className={`sidebar-close-button `} onClick={ToggleMenu}>X</button>
        <li>
            <a href="index.html">Pants</a>
        </li>

        <li>
            <a href="index.html">Shirts</a>
        </li>

    </aside>
    )
}
