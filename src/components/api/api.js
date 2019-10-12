import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "017e6611-834f-4346-a92c-dfc8f1dfc02b"}
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

