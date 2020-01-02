import React from 'react';
import '../assets/styles/Item.scss';
import likeIcon from '../assets/static/like-icon.png';
import dislikeIcon from '../assets/static/dislike-icon.png';

const Item = (props) => {
    const {name, image, category, description, id} = props;
    return(
        <div className="item" style={{backgroundImage: `url(${image})`,  backgroundSize: 'cover'}}>
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
                    <div id="likeButton"><img src={likeIcon} alt="Like"/></div>
                    <div id="dislikeButton"><img src={dislikeIcon} alt="Dislike"/></div>
                    <div id="voteButton"><span>Vote Now</span></div>
                </div>
                <div className="item__details--progressBar"></div>
            </div>
        </div>
    )
}
export default Item;