import request from '@/utils/request'
/**
 * 获取用户信息
 */
export function getUserList1(params) {
  return request({
    url: '/daAdmin/getUserList1',
    method: 'get',
    params
  })
}
export function getAdminUser(params) {
  return request({
    url: '/daAdmin/getAdminUserList',
    method: 'get',
    params
  })
}
export function updateAdminUserPwdAuth(data) {
  return request({
    url: '/daAdmin/updateAdminUserPwdAuth',
    method: 'post',
    data
  })
}
export function addAdminUser(data) {
  return request({
    url: '/daAdmin/addAdminUser',
    method: 'post',
    data
  })
}
export function deleteAdminUser(params) {
  return request({
    url: '/daAdmin/deleteAdminUser',
    method: 'get',
    params
  })
}
export function sendOrderMessage(data) {
  return request({
    url: '/daAdmin/sendOrderMessage',
    method: 'post',
    data
  })
}
export function getOrderList(data) {
  return request({
    url: '/daAdmin/getOrderList',
    method: 'post',
    data
  })
}
export function saveUser(data) {
  return request({
    url: '/daWeiXin/saveUser',
    method: 'post',
    data
  })
}
export function queryOrder(params) {
  return request({
    url: '/daWeiXin/queryOrder',
    method: 'get',
    params
  })
}
