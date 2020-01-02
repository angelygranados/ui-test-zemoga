import React from 'react';
import '../assets/styles/Item.scss';
import likeIcon from '../assets/static/like-icon.png';
import dislikeIcon from '../assets/static/dislike-icon.png';

const Item = (props) => {
    const {id, name, image, category, description, changed, value, isSelected, handleVote, countLike, countDislike} = props;
    return(
        <div className="item" id={id} style={{backgroundImage: `url(${image})`,  backgroundSize: 'cover'}}>
            <div className="item__details">
                <img className="item__details--icon" src={likeIcon} alt="votating"/>
                <h3 className="item__details--name">{name}</h3>
                <div className="item__details--categoty">
                    <span>1 month ago in {category}</span>
                </div>
                <div className="item__details--description">
                    <p>{description}</p>
                </div>
                <div className="item_details--buttons">
                    <div className="RadioButton">
                        <input id={`likes-${id}`} onChange={changed} value={value} type="radio" checked={isSelected} />
                        <label htmlFor={`likes-${id}`}
                            <img src={likeIcon} alt="Like"/>
                        </label>
                    </div>
                    <div className="RadioButton">
                        <input id={`dislikes-${id}`} onChange={changed} value={value} type="radio" checked={isSelected} />
                        <label htmlFor={`dislikes-${id}`}>
                            <img src={dislikeIcon} alt="Dislike"/>
                        </label>
                    </div>
                    <div id="voteButton" onClick={handleVote}><span>Vote Now</span></div>
                </div>
                <div className="item__details--progressBar">
                        <div><img src={likeIcon}/><span>{countLike}</span></div>
                        <div><img src={dislikeIcon}/><span></span>{countDislike}</div>
                </div>
            </div>
        </div>
    )
}
export default Item;
