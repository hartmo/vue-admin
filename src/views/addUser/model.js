/**
 * 搜索model
 */
export function listQuery() {
  return {
    // 供应商名字
    areaId: '',
    name: '',
    supplierStatus: '',
    // 状态
    stop: '',
    options: [],
    // 状态多选
    typeOptions: [{
      value: 'NORMAL',
      label: '正常'
    }, {
      value: 'STOP',
      label: '停用'
    }]
  }
}
/**
 * 请求接口
 */
export const request = {
  // 分页查询
  queryAreaPage: {
    url: 'supplier/supplierPage',
    data: 'data'
  },
  // 暂停注册园区
  suspendArea: {
    url: 'supplier/supplierUpdateState'
  }
}
// 展示字段名称
export const showarr = [{
  text: '供应商名称',
  value: 'name'
}, {
  text: '所属园区',
  value: 'areaName'
}, {
  text: '工作室数量',
  value: 'totalCapacity'
}, {
  text: '管理员账号',
  value: 'username'
}, {
  text: '状态',
  value: 'supplierStatus'
}]
