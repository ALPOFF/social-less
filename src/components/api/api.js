import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "05cc84d9-c8f6-4f9c-9f8c-744fb5b815c1"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })
    },

    getUsers2 (currentPage = 1, pageSize = 10) {
        return instance.get(`follow?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => { return response.data })
    }
}

