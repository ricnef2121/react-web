import { put , call ,takeLatest } from 'redux-saga/effects';
import {SEARCH_SOLICITUDES} from '../../consts/actionTypes';

export function* searchSolicitudes({payload}){
	try {
		
	} catch (error) {
		
	}
}

export default function* search(){
	yield takeLatest(SEARCH_SOLICITUDES,searchSolicitudes);
	
}