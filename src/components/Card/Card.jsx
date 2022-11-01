import React, {useState, useEffect} from 'react';
import classes from "./Card.module.scss";
const Card = ({ onClickFavorite, imageUrl, title, price, onClickPlus }) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleClickPlus = () => {
        onClickPlus({ imageUrl, title, price }); 
        setIsAdded(!isAdded);
    }


    return (
        <div className={classes.card}>
            <div className={classes.favorite} onClick={onClickFavorite} >
                <img src="/img/heart-unliked.svg" alt="unlicked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="" />
            <h5>
                {title}
            </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price} грн.</b>
                </div>
                <img 
                    className={classes.plus} 
                    onClick={handleClickPlus} 
                    src={
                        isAdded ? "/img/btn-checked.svg" : "/img/btn-unchecked.svg"
                    }
                    alt="Plus" />
            </div>
        </div>
    );
}

export default Card;