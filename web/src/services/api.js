import service from "./http"

export const getAuth = payload => service.post("authenticate", {code: payload })
export const getProfile = () => service.get("profile")
