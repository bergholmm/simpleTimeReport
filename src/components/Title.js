import React from 'react';
import { connect } from 'react-redux';

// React component

const Title = ({ userName }) => {
    let extraText = <span>Enter your time reports below</span>;

    if (userName === '') {
        extraText = <span>Enter your name below</span>;
    }

    return (
        <div className="info">
            <h1>Hi there!</h1>
            <p>Welcome to Simple Time Report {userName}</p>
            { extraText }
        </div>
    );

};

// Redux container

const mapStateToProps = (state) => {
    return {
        userName: state.user.name,
    };
};

export default connect(mapStateToProps)(Title);
