import * as types from './../types';

const initialState = {
    hasCarrier: false,
};

const global = (state = initialState, action) => {
    switch (action.type) {
        case types.CHECK :
            return {
                ...state,
                hasCarrier:action.hasCarrier
            }
        default:
            return state
    }
};

export default global;