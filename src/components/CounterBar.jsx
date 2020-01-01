import React from 'react';
import '../assets/styles/CounterBar.scss';

const CounterBar = () => (
    <div className="counterBar">
        <div className="counterBar__left">
            <span>closing in</span>
        </div>
        <div className="counterBar__right">
            <span><b>22</b> days</span>
        </div>

    </div>
);

export default CounterBar;