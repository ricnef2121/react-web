import { SEARCH_SOLICITUDES_START } from "../../consts/actionTypes";


export const searchSolicitudes = payload => ({
    type: SEARCH_SOLICITUDES_START,
    payload
});