import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "d022bf17-2f29-4002-a09d-47f3b175fa81"}
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
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me/`)
    }
}
