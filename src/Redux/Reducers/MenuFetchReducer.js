import { FETCH_ITEM_DATA } from '../Actions/ActionTypes';

const initialState = {
    items: []
};

const MenuFetchReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ITEM_DATA:
            return {
                ...state,
                items: action.payload
            }

        default:
            return state
    }
}

export default MenuFetchReducer