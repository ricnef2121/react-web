import { put , call ,takeLatest } from 'redux-saga/effects';
import {SEARCH_SOLICITUDES_START,SEARCH_SOLICITUDES_ERROR,SEARCH_SOLICITUDES_COMPLETE} from '../../consts/actionTypes';
import { apiCall } from '../api';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5N2I5NDU5ZS0xODM3LTQ2ZDEtYmE4Mi0xNWM2YWY0NTUxYzQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTc4MTc3MjA4LCJpc3MiOiJodHRwOi8vMTkyLjE2OC4wLjI1IiwiYXVkIjoiaHR0cDovLzE5Mi4xNjguMC4yNSJ9.eYrft7zyXcdIjcpxesNgDb7rpVUFAoWCnSxGc3vLCnc'
}

export function* searchSolicitudes({payload}){
	try {
		
		console.log("action dispatch",payload.id)
		//ejecutamos la llamada al api
		const results = yield call(apiCall,`${payload.id}`,null,headers,'GET');
		//para que nuestra accion sea enviada al componente tenemos que volver
		//a enviar una accion, con esto el reducer lo detectara
		yield put({type:SEARCH_SOLICITUDES_COMPLETE, results})
	} catch (error) {
		yield put({type:SEARCH_SOLICITUDES_ERROR, error});
	}
}

export default function* search(){
	yield takeLatest(SEARCH_SOLICITUDES_START,searchSolicitudes);
	
}