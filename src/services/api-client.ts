import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '76b8bf3f194b419ea0f277d94c16948e'
    }
})