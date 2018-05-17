import axios from 'axios';
import {apiBaseURL} from './../utils/constants';
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../utils/ActionType';


export default function fetchCoinData(){
		return dispatch => {
			dispatch({type: FETCHING_COIN_DATA})
			return axios.get('https://api.coinmarketcap.com//v1/ticker/?limit=13')
			.then(res => {
				dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: res.data});
			})
			.catch(err => {
				dispatch({type: FETCHING_COIN_DATA_FAIL, payload: err.data})
			});

			}
}

