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
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
