import { FETCH_ITEM_DATA } from './ActionTypes';
import DataList from '../../AllDataList/DataList'

export const fetchAllData = () => dispatch => {
    dispatch({
        type: FETCH_ITEM_DATA,
        payload: DataList
    })
}