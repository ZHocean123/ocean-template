import Vue from 'vue';
// import qs from 'qs';
import API from '../../api';
import { SET_TOKEN } from '../mutation-types';

export function login({ commit }, form) {
  // 假数据
  // return new Promise((resolve, reject) => {
  //   if (form.username && form.password) {
  //     setTimeout(() => {
  //       const session = 'test';
  //       commit(SET_TOKEN, session);
  //       resolve(session);
  //     }, 1000);
  //   } else {
  //     reject();
  //   }
  // });

  return new Promise((resolve, reject) => {
    Vue.http
      .get(API.USER_LOGIN, {
        params: form,
      })
      .then((data) => {
        const session = data.token;
        commit(SET_TOKEN, session);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function logout({ commit }) {
  commit(SET_TOKEN, '');
}
