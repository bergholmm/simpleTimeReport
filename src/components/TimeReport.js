import React from 'react';
import Title from './Title';
import AddTimeReport from './AddTimeReport';
import Board from './Board';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { logout } from '../actions/user';
import { clearReports } from '../actions/timeReports';
import './App.css';

// React component

const TimeReport = ({dispatch, state}) => {
    const submit = (e) => {
        e.preventDefault();
        dispatch(logout());
        dispatch(clearReports());
        dispatch(push('/'))
    };

    return (
        <div>
            <Title />
            <AddTimeReport />
            <Board />
            <form onSubmit={submit}>
                <input className="form-submit" type="submit" value="Change user"/>
            </form>
        </div>
    );
}

// Redux container

export default connect()(TimeReport);
