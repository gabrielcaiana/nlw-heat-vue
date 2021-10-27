import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const authentication = {
  namespaced: true,
  state: {
    token: null,
    user: null
  },

  actions,
  mutations,
  getters,
};
