import axios from 'axios';

const baseURL = 'http://192.168.0.205:2054/api/trasladosHematix/solicitudes';

export const apiCall = (url,data,headers,method) => axios({
    method,
    url:baseURL + url,
    data,
    headers
})