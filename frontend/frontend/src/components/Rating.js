import React from "react";
import RatingStyles from "../styles/Rating.module.css";


const Rating = () => {
    return (
        <div className={RatingStyles.rating}>
            <input value="10" name="rating" id="star" type="radio" />
            <label htmlFor="star10"></label>
            <input value="9" name="rating" id="star9" type="radio" />
            <label htmlFor="star9"></label>
            <input value="8" name="rating" id="star8" type="radio" />
            <label htmlFor="star8"></label>
            <input value="7" name="rating" id="star7" type="radio" />
            <label htmlFor="star7"></label>
            <input value="6" name="rating" id="star6" type="radio" />
            <label htmlFor="star6"></label>
            <input value="5" name="rating" id="star5" type="radio" />
            <label htmlFor="star5"></label>
            <input value="4" name="rating" id="star4" type="radio" />
            <label htmlFor="star4"></label>
            <input value="3" name="rating" id="star3" type="radio" />
            <label htmlFor="star3"></label>
            <input value="2" name="rating" id="star2" type="radio" />
            <label htmlFor="star2"></label>
            <input value="1" name="rating" id="star1" type="radio" />
            <label htmlFor="star1"></label>
        </div>
    );
};

export default Rating;