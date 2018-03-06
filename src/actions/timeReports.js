export const ADD_REPORT = 'ADD_REPORT';
export const REMOVE_REPORT = 'REMOVE_REPORT';
export const CLEAR_REPORTS = 'CLEAR_REPORTS';

export const addReport = (report) => {
    return {
        type: ADD_REPORT,
        report,
    };
};

export const removeReport = (id) => {
    return {
        type: REMOVE_REPORT,
        id,
    };
};

export const clearReports = () => {
    return {
        type: CLEAR_REPORTS,
    };
};
