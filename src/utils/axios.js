import axios from 'axios';
import Vue from 'vue';
import NProgress from 'nprogress';
import store from '../store';
import API from '../api';

const http = axios.create({
  baseURL: API.ROOT,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
  withCredentials: false,
});

http.interceptors.request.use((config) => {
  NProgress.start();
  if (config.appendToken === false) {
    return config;
  }
  const { token } = store.state.user;
  /**
   * TOKEN 注入
   *
   * 此处直接在 query (GET方法) 或者 form-data (POST PUT DELETE 等方法) 注入session 参数
   * ！实际情况请根据前后端的API规范进行定义
   */
  /* eslint-disable no-param-reassign */
  if (config.method === 'get') {
    if (config.params) {
      config.params.session = token;
    } else {
      config.params = { session: token };
    }
  } else if (config.data) {
    config.data = `${config.data}&session=${token}`;
  } else {
    config.data = `session=${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (res) => {
    NProgress.done();
    const { data } = res;
    if (!data || data.state !== 'success') {
      return Promise().reject(Error('error'));
    }
    return data;
  },
  (error) => {
    NProgress.done();
    if (error.response) {
      console.error('Response: ', error.response.data);
      console.error('Status: ', error.response.status);
      console.error('Headers: ', error.response.headers);
    } else {
      console.error('Error: ', error.message);
    }
    return Promise().reject(error);
  },
);

export default {
  install() {
    Vue.prototype.$http = http;
    Vue.http = http;
  },
};
