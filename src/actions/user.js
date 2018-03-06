export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUser = (name) => {
    return {
        type: SET_USER,
        name,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
