import React from 'react';
import '../assets/styles/CTA.scss';
import closeIcon from '../assets/static/close-icon.png';

const CTA = () => (
    <div className="CTA">
        <div className="CTA__title">
            <h4>Speak out. Be heard.</h4>
            <h3>Be counted</h3>
        </div>
        <div className="CTA__details">
            <p>Rule of Thumb is a crowd sourced court of public opinion where anyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</p>
        </div>
        <div className="CTA__close">
            <img src={closeIcon} alt="close"/>
        </div>
    </div>
);
 export default CTA