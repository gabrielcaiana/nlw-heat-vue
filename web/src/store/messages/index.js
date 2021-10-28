import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const messages = {
  namespaced: true,
  state: {
    messages: null
  },

  actions,
  mutations,
  getters,
};
