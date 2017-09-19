import axios from 'axios';
import Vue from 'vue';
import NProgress from 'nprogress';
import store from '../store';

const http = axios.create({
  baseURL: '',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
  withCredentials: false,
});

http.interceptors.request.use((config) => {
  if (config.appendToken === false) {
    NProgress.start();
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
  NProgress.start();
  return config;
});

export default {
  install() {
    Vue.prototype.$http = http;
    Vue.http = http;
  },
};
