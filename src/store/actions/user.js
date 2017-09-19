import { SET_TOKEN } from '../mutation-types';

export function login({ commit }, form) {
  // 假数据
  return new Promise((resolve, reject) => {
    if (form.username && form.password) {
      const session = 'test';
      commit(SET_TOKEN, session);
      return resolve(session);
    }
    return reject();
  });
}

export function logout({ commit }) {
  commit(SET_TOKEN, '');
}
