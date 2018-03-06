import React from 'react';
import moment from 'moment';

const Card = ({ id, comment, date, hours, onRemoveClick }) => {
    return (
        <div className="card">
            <p className="card-text">{ hours + ' Hours' }</p>
            <span className="card-text">{ date.format('MMMM Do YYYY, h:mm a') + '.   ' }</span>
            <span className="card-text">{ comment }</span>
            <span className="card-remove" onClick={ () => onRemoveClick(id) }>-</span>
        </div>
    );
};

export default Card;
