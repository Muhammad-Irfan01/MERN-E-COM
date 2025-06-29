export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
import axios from 'axios'

export const getData = () => async(dispatch) =>{
    dispatch({type : FETCH_DATA_REQUEST});
    try {
        const res = await axios.get('http://localhost:8000/getProducts');
        dispatch({type : FETCH_DATA_SUCCESS, payload : res.data})
    } catch (error) {
        dispatch({type : FETCH_DATA_FAILURE, payload : error.response?.data?.message})
    }
}
