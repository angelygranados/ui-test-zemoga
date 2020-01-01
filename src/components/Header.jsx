import React from 'react';
import '../assets/styles/Header.scss';
import Menu from './Menu';
import Featured from './Featured';
import heroImage from '../assets/static/hero.jpg';
import CounterBar from './CounterBar';

const Header = () => (
    <section className="header" style={{backgroundImage: `url(${heroImage})`,  backgroundSize: 'cover'}}>
        <Menu/>
        <Featured/>
        <CounterBar/>
    </section>  
);

export default Header;