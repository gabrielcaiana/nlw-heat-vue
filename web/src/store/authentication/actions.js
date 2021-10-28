import { Auth, Profile } from "@/services/api"

export const actions = {
  getAuth: async ({ commit }, payload) => {
    try {
      const { status, data } = await Auth(payload)

      if (status === 200) {
        const { token, user } = data;

        localStorage.setItem("@nlw7:token", token)

        commit('setToken', token);
        commit('setUser', user);
      }
    } catch (err) {
      throw new Error({ error: err });
    }
  },

  getProfile: async ({ commit }) => {
    try {
      const { status, data } = await Profile();
      
      if (status === 200) {
        await commit('setUser', data);
      }
    } catch (err) {
      throw new Error({ error: err });
    }
  },
  
  getLogout: async({commit}) => {
    try{
      localStorage.removeItem("@nlw7:token")

      commit("cleanToken", null)
      commit("cleanUser", null)
    }catch(err) {
      throw new Error(err)
    }
  }
};
