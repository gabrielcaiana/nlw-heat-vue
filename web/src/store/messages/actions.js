import { Messages, CreateMessage } from "@/services/api"

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
  
  setMessage: async ({ commit }, payload) => {
    try {
      const { status, data } = await CreateMessage(payload)

      if (status === 200) {
        alert("Mensagem cadastrada com sucesso!")
      }
    } catch (err) {
      throw new Error({ error: err });
    }
  },  
};
