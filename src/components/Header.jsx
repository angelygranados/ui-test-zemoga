import React from 'react';
import '../assets/styles/Header.scss';
import Menu from './Menu';
import Featured from './Featured';
import heroImage from '../assets/static/hero.jpg';

const Header = () => (
    <section className="header" style={{backgroundImage: `url(${heroImage})`,  backgroundSize: 'cover'}}>
        <Menu/>
        
    </section>  
);

export default Header;