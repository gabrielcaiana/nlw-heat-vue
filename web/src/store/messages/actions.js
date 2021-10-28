import { Messages } from "@/services/api"

export const actions = {
  getMessages: async ({ commit }) => {
    try {
      const { status, data } = await Messages()

      if (status === 200) {
        commit('setMessages', data);
      }
    } catch (err) {
      throw new Error({ error: err });
    }
  },  
};
