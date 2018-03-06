import React from 'react';
import { connect } from 'react-redux';
import { removeReport } from '../actions/timeReports';
import Card from './Card';

// React component

const List = ({ status, children, reports, remove }) => {
    if (status === 'Statistics') {
        let totalTime = 0;
        if (reports.length !== 0) {
            totalTime = reports.reduce((currentValue, report) => currentValue + report.hours, 0);
        }

        return (
            <div className={ `list ${status.toLowerCase()}-list` }>
                <h5>{ children }</h5>
                <div className="card">
                    <p className="card-text">{ 'Total time worked' }</p>
                    <span className="card-executor">{ totalTime }</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className={ `list ${status.toLowerCase()}-list` }>
                <h5>{ children } <span>{ reports.length }</span></h5>
                { reports.map((report) =>
                    <Card
                        key={ report.id }
                        { ...report }
                        onRemoveClick={ remove }
                    />
                ) }
            </div>
        );
    }

};

// Redux container

const mapStateToProps = (state, ownProps) => {
    return {
        reports: state.timeReports.reports,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(removeReport(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
