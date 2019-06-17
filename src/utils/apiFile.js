/**
 * api发起请求
 * @param {String} url 例子：user/login 目前仅支持2级
 * @param {*} data 参数
 */

export function apiFile(url, data) {
  const filePath = url.split('/')
  const modulesFiles = require.context('../api', false, /\.js$/)
  const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    let value = []
    if (modulePath.indexOf(filePath[0]) > 0) {
      value = modulesFiles(modulePath)
      return value[filePath[1]]
    }
    return modules
  }, {})
  return modules(data)
}
