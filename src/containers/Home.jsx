import React, {useEffect,useState} from 'react';
import '../assets/styles/Home.scss';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Votes from '../components/Votes';
import Item from '../components/Item';

const Home = () => {
    return(
    <div className="container">
        <Header/>
        <CTA/>
        <Votes>
        </Votes>   
    </div>
    )  
};

export default Home