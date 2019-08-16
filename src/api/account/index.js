import http from './http'

// 获取图片验证码
export function verifyCodeImg() {
  return http.get('/verifyCodeImg');
}
