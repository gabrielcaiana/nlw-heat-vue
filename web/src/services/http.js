import Axios from "axios"
import store from "@/store"

Axios.interceptors.request.use(
  function (config) {
    store.getters['authentication/getToken']

    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }
)