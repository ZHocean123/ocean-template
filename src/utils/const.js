// 应用前缀名：避免同一个IP:PORT下，LocalStorage Key 同名造成冲突
const prefix = 'APP_';

export const STORAGE_KEY = {
  TOKEN: `${prefix}SESSION_KEY`,
  LAST_LOGIN_TIME: `${prefix}LAST_LOGIN_TIME`,
};

// 登录的过期时间，默认：2小时
export const MAX_LOGIN_AGE = 7.2 * 1000 * 1000;

// 错误码
export const STATUS_CODE = {};

// 提示信息
export const MSG = {
  SERVICE_FAIL: '后端接口服务异常，请刷新试试~', // 后端服务异常
};
