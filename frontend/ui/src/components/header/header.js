import React from 'react'
import {
    Link
} from 'react-router-dom'

import {useSelector} from 'react-redux'

export default function Header({ToggleMenu}) {

    const signUser = useSelector(state => state.userSigninReducer)
const {userInfo} = signUser

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
            {
                userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                            <Link to="/signin">Sign in</Link>
            }
         
        </div>

    </header>
    )
}
