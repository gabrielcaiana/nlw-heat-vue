import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const authentication = {
  state: {
    token: null,
  },
  actions,
  mutations,
  getters,
};
