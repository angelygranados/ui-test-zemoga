import React from 'react';
import '../assets/styles/Featured.scss';
import wikiIcon from '../assets/static/wiki-icon.png';
import likeIcon from '../assets/static/like-icon.png';
import dislikeIcon from '../assets/static/dislike-icon.png';

const Featured = () => (
    <div className="featured">
        <div className="featured__content">
            <div className="featured__content--title">
                <h3>What's your opinion on:</h3>
                <h2>Pope Francis?</h2>
            </div>
            <div className="featured__content--details">
                <p>He's talking tough on clergy sexual abuse, <br/> but is he just another papal pervert  <br/> protector? (thumbs down) or a true  <br/> pedophile punishing pontiff? (thumbs up)</p>
                <div className="details__link">
                    <img src={wikiIcon}/>
                    <span>More information</span>
                </div>
            </div>
            <div className="featured__content--CTA">
                <span>What's Your Veredict?</span>
            </div>

        </div>
        <div className="featured__voters">
            <div className="featured__voters--like"><img src={likeIcon} alt="Like"/></div>
            <div className="featured__voters--dislike"><img src={dislikeIcon} alt="Dislike"/></div>
        </div>
    </div>
    
);

export default Featured;