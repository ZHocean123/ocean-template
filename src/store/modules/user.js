import store from 'store2';
import { STORAGE_KEY } from '../../utils/const';
import { SET_USER_INFO, SET_TOKEN } from '../mutation-types';
import * as actions from '../actions/user';

const state = {
  userInfo: {
    username: 'admin',
  },
  token: store(STORAGE_KEY.TOKEN) || '',
};

/* eslint-disable no-param-reassign */
const mutations = {
  [SET_USER_INFO](inState, userInfo) {
    inState.userInfo = userInfo || {};
  },

  [SET_TOKEN](inState, token) {
    if (token) {
      store.set(STORAGE_KEY.TOKEN, token);
    } else {
      store.remove(STORAGE_KEY.TOKEN);
    }
    store.set(STORAGE_KEY.LAST_LOGIN_TIME, Date.now());
    inState.token = token || '';
  },
};

export default {
  state,
  mutations,
  actions,
};
