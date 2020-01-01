import React from 'react';
import '../assets/styles/Votes.scss';

const Votes = ({children}) => (
    <section className="votes">
        <h2>Votes</h2>
        <div className="votes__items">
            {children}
        </div>
    </section>
);

export default Votes;