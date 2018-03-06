import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import { connect } from 'react-redux';
import { addReport } from '../actions/timeReports';
import './react-datetime.css';

// React component

class AddTimeReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
        };
    }
    setDate(date) {
        this.setState({
            date,
        });
    }
    submitReport(e) {
        e.preventDefault();
        const { date } = this.state;

        if (!this.inputHours.value.trim() || date === null || isNaN(this.inputHours.value))
            return;

        const time = parseInt(this.inputHours.value, 10);

        if ( time > 24 || time < 1 )
            return;

        if ( typeof(date) !== 'object')
            return;

        this.props.add({ hours: time, date , comment: this.inputComment.value});
        this.inputHours.value = '';
        this.inputComment.value = '';
    }
    render() {

        return (
            <div className="form-container">
                <form onSubmit={ this.submitReport.bind(this) }>
                    <Datetime inputProps={{ placeholder: 'Date' }} timeFormat={false} onChange={ (date) => this.setDate(date) }/>
                    <input className="form-text" placeholder="Hours" ref={ node => this.inputHours = node } />
                    <input className="form-text" placeholder="Project name / Comment" ref={ node => this.inputComment = node } />
                    <input className="form-submit" type="submit" value="Add"/>
                </form>
            </div>
        );
    }
};

// Redux container

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (report) => dispatch(addReport(report)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTimeReport);
