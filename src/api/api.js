import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "api-key": "61af85e9-a575-440a-b080-b7f6a6c72d1f"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authorize() {
        return instance.get('/auth/me')
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
            .then(response => response.data)
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => response.data.resultCode)
    }
}
