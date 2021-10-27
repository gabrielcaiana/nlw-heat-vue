import Axios from "axios"
import store from "@/store"

const service =Axios.create({
  baseURL: "http://localhost:4000"
})

service.interceptors.request.use(function (config) {
    const token = store.getters['authentication/getToken']

    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }
)

export default service