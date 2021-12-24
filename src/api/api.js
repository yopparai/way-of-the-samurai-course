import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "api-key": "61af85e9-a575-440a-b080-b7f6a6c72d1f"
    }
})

export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        const response = await instance.get(`/users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    }
}

export const authAPI = {
    async authorize() {
        const response = await instance.get('/auth/me')
        return response.data
    },
    async login(email, password, rememberMe) {
        const response = await instance.post('/auth/login', {email, password, rememberMe})
        return response.data
    },
    async logout() {
        const response = await instance.delete('/auth/login')
        return response.data
    }
}

export const profileAPI = {
    async getProfile(userId) {
        const response = await instance.get(`/profile/${userId}`)
        return response.data
    },
    async getStatus(userId) {
        const response = await instance.get(`/profile/status/${userId}`)
        return response.data
    },
    async updateStatus(status) {
        const response = await instance.put(`/profile/status`, {status})
        return response.data
    },
    async savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        const response = await instance.put(`/profile/photo`, formData)
        return response.data
    }
}

export const followAPI = {
    async follow(userId) {
        const response = await instance.post(`/follow/${userId}`);
        return response.data.resultCode;
    },
    async unfollow(userId) {
        const response = await instance.delete(`/follow/${userId}`);
        return response.data.resultCode;
    }
}
