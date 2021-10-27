import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const authentication = {
  namespaced: true,
  state: {
    token: '123',
  },
  actions,
  mutations,
  getters,
};
