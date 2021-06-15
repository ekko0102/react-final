import axios from 'axios'

const profileApi = axios.create({
    baseURL: "https://rap-intro.herokuapp.com/api"
})
export const apiGetProfile = (id) => profileApi.get(`/profile/${id}`, {
    withCredentials: true,
})
export const apiGetImageList = (id) => profileApi.get(`/portfolio/${id}`, {
    withCredentials: true,
})
export const apiGetMusicList = (id) => profileApi.get(`/musicproduct/${id}`, {
    withCredentials: true,
})