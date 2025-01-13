/**
 * 业务状态码
 * 200 正常状态
 * 400 缺少参数
 * 401 缺少 token 或 token 失效
 * 403 没有访问权限
 * 500 缺少参数或服务端业务逻辑错误
 */

const STATUS_CODE = {
  OK: 200,
  LACK_PARAMS: 400,
  TOKEN_ERR: 401,
  AUTH_ERR: 403,
  SERVER_ERR: 500
};

export default STATUS_CODE;
