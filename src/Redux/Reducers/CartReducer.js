import { ADD_TO_CART, REMOVE_FROM_CART } from '../Actions/ActionTypes';

const initialState = {
    cart: [],
    total: 0,
}

const SaveToCart = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log('Cart Data from Payload Are...', action.payload);
            console.log('Cart Data Are...', ...state.cart);
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                total: state.total + action.payload.price,
            }

        case REMOVE_FROM_CART:
            console.log('REMOVE_REDUCER', action.payload);
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price
            }

        default:
            return state
    }
}

export default SaveToCart;