import Vue from 'vue';
import Router from 'vue-router';
import store from 'store2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { STORAGE_KEY, MAX_LOGIN_AGE } from '../utils/const';
import routes from './routes';

// 路由配置
Vue.use(Router);
const router = new Router({
  mode: 'history',
  root: '.',
  routes,
});

// 路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start();
  const shouldAuth = to.meta && to.meta.auth;
  if (to.name === 'login' || !shouldAuth) {
    // 无需拦截该路由
    return next();
  }
  const lastLoginTime = store(STORAGE_KEY.LAST_LOGIN_TIME) || 0;
  if (!store(STORAGE_KEY.TOKEN) || Date.now() - lastLoginTime > MAX_LOGIN_AGE) {
    // 登录超时
    return next({
      name: 'login',
      query: {
        // 将当前路径传参
        back: to.fullPath,
      },
    });
  }
  return next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
