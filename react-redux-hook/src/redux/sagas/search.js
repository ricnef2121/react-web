import { put , call ,takeLatest } from 'redux-saga/effects';
import {SEARCH_SOLICITUDES_START,SEARCH_SOLICITUDES_ERROR,SEARCH_SOLICITUDES_COMPLETE} from '../../consts/actionTypes';
import { apiCall } from '../api';

export function* searchSolicitudes({payload}){
	try {
		//const results = yield call(apiCall,`&s=${payload.movieName}`,null,null,'GET');
		const results = yield call(apiCall,null,null,null,'GET');
		yield put({type:SEARCH_SOLICITUDES, results})
	} catch (error) {
		yield put({type:SEARCH_SOLICITUDES, error});
	}
}

export default function* search(){
	yield takeLatest(SEARCH_SOLICITUDES_START,searchSolicitudes);
	
}