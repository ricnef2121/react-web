import {get} from 'lodash';
import {SEARCH_SOLICITUDES} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState,action){
    switch(action.type){
        case SEARCH_SOLICITUDES:
            return {...state};
            break;
        default:
            return {...state};

    }
}