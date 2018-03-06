import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import { push } from 'react-router-redux'

// React component

const SelectUser = ({ dispatch, state }) => {
    let inputText;

    const submit = (e) => {
        e.preventDefault();

        if (!inputText.value.trim())
            return;

        dispatch(setUser(inputText.value));
        inputText.value = '';
        dispatch(push('/report'))
    };

    return (
        <div className="form-container">
            <form onSubmit={submit}>
                <input className="form-text" placeholder="Who..." ref={node => inputText = node} />
                <input className="form-submit" type="submit" value="Enter"/>
            </form>
        </div>
    );
};

// Redux container

export default connect()(SelectUser);
