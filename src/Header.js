import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    render() { 

        return ( 
            <header>
                <div className="title">PoKeDeX PaRtY 😛</div>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/pokemon">Pokemon List</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;