import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/daAdmin/login',
    method: 'post',
    data
  })
}
export function authCode(data) {
  return request({
    url: '/da/authCode',
    method: 'get',
    data
  })
}
