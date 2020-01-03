import React from 'react';
import '../assets/styles/Menu.scss';
import searchIcon from '../assets/static/search-icon.png'
import { Link } from 'react-router-dom';

const Menu = () => (
    <nav className="menu">
        <div className="menu__title">Rule of Thumb.</div>
        <div className="menu__navbar">
            <ul>
                <li className="menu__navbar--item"><Link to="/trials" className="item__link">Past Trials</Link></li>
                <li className="menu__navbar--item"><Link to="/works" className="item__link">How It Works</Link></li>
                <li className="menu__navbar--item"><Link to="/login" className="item__link">Log In / Sign Up </Link></li>
                <li className="menu__navbar--item"><Link to="/search" className="item__link"><img className="item__search" src={searchIcon} alt="search"/></Link></li>
            </ul>
            
        </div>
    </nav>
);

export default Menu;