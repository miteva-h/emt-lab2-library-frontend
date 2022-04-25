import axios from "axios";

const instance = axios.create({
    baseURL: 'https://e-library-backend-191007.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;