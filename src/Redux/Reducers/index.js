import { combineReducers } from 'redux';
import MenuFetchReducer from './MenuFetchReducer';
import SaveToCart from './CartReducer';
export default combineReducers({
    fetchData: MenuFetchReducer,
    saveDataToCart: SaveToCart
})