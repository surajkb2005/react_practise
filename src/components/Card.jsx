import React from 'react';

function Card(cats) {
    return (
        <span className="circle_card">
            <img src={cats.image} alt={cats.alt} ></img>
        </span>
    );
}

export default Card;