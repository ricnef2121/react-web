import { get } from 'lodash';
import { SEARCH_SOLICITUDES_START, SEARCH_SOLICITUDES_ERROR, SEARCH_SOLICITUDES_COMPLETE } from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_SOLICITUDES_START:
            return { ...state };
            break;
        case SEARCH_SOLICITUDES_ERROR:
            return { ...state };
            break;
        case SEARCH_SOLICITUDES_COMPLETE:
            return { ...state };
            break;
        default:
            return { ...state };

    }
}