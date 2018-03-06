import { ADD_REPORT, REMOVE_REPORT, CLEAR_REPORTS } from '../actions/timeReports';

const initialState = {
    nextId: 0,
    reports: [],
};

const timeReports = (state = initialState, action) => {
    const { type } = action;

    if (type === ADD_REPORT) {
        const report = { ...action.report, id: state.nextId };
        return { ...state, reports: [ ...state.reports, report ], nextId: state.nextId + 1 };
    }
    else if ( type === REMOVE_REPORT) {
        const reports = state.reports.filter( report => report.id !== action.id );
        return { ...state, reports };
    }
    else if ( type == CLEAR_REPORTS ) {
        return initialState;
    } else {
        return state;
    }
}

export default timeReports;
