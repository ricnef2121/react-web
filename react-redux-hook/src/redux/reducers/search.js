//import { get } from 'lodash';
import { SEARCH_SOLICITUDES_START, SEARCH_SOLICITUDES_ERROR, SEARCH_SOLICITUDES_COMPLETE } from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_SOLICITUDES_START:
            return { ...state,isLoading :true };
            
        case SEARCH_SOLICITUDES_ERROR:            
            return { ...state,isLoading:false,searchResult:null };
        case SEARCH_SOLICITUDES_COMPLETE:          
            return { ...state,isLoading:false,searchResult:action.results.data };
           
        default:
            return { ...state };

    }
}