import axioss from 'axios';
// const ApiLink ="https://tiemdo-api.herokuapp.com/api/";

const ApiLink ="http://localhost:3011/api/";

const axios = axioss.create({
    baseURL: ApiLink,
    timeout: 15*1000,
})

export {ApiLink,axios};