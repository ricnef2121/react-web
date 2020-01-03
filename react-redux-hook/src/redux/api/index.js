import axios from 'axios';

//const baseURL = 'http://192.168.0.205:2054/api/trasladosHematix/solicitudes';
const baseURL = 'http://medicosoft.mx:2057/api/traslados';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5N2I5NDU5ZS0xODM3LTQ2ZDEtYmE4Mi0xNWM2YWY0NTUxYzQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTc4MDg5NjQwLCJpc3MiOiJodHRwOi8vMTkyLjE2OC4wLjI1IiwiYXVkIjoiaHR0cDovLzE5Mi4xNjguMC4yNSJ9._kfaomPVqOXGG9ECaeUu2vk6jbvkWiKIflsDwykjGwc'
}

export const apiCall = (url, data, headers, method) => axios({
    method,
    url: baseURL + url,
    data,
    headers : headers
})