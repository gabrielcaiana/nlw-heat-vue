import { api } from '@/services/api';

export const actions = {
  getProfile: async ({ commit }, payload) => {
    try {
      const { status, data } = await api.post('authenticate', {
        code: payload,
      });

      if (status === 200) {
        const { token, user } = data;

        commit('setToken', token);
        commit('setUser', user);
      }
    } catch (err) {
      throw new Error({ error: err });
    }
  },
};
