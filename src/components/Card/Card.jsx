import React, {useState, useEffect} from 'react';
import classes from "./Card.module.scss";
const Card = (props) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleClickPlus = () => {
        setIsAdded(!isAdded);
    }


    return (
        <div className={classes.card}>
            <div className={classes.favorite} onClick={props.onClickFavorite} >
                <img src="/img/heart-unliked.svg" alt="unlicked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" />
            <h5>
                {props.title}
            </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{props.price} грн.</b>
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