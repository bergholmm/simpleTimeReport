import { SET_USER, LOGOUT } from '../actions/user';

const initialState = {
    name: '',
};

const user = (state = initialState, action) => {
    const { type } = action;

    if (type == SET_USER) {
        const { name } = action;
        return { ...state, name };
    }
    else if (type == LOGOUT) {
        return initialState;
    } else {
        return state;
    }
}

export default user;
