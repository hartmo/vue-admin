### table使用说明
`table`有两种方式
- 直接渲染页面
	v-model传入参数即可
- table内部接口数据请求
	需要把isbackpage打开，并且request的url和post请求方式需要提供到
##### props传参说明

| 参数名字  | 类型  |默认参数  | 简介  |
| ------------ | ------------ | ------------ | ------------ |
| value  | Array  | 空数组    | 默认是直接渲染数据 |
| paginationShow  | Boolean  | true  |是否展示分页，默认：true  |
| isbackpage  | Boolean  | false  |是否后台传参，如果是后台传参 request字段必须传  |
| pagesizes  | Array  | [25, 50, 100, 150, 200]  |数据条数，如果有更改默认获取第一个  |
| request  | Object  | {url:'',data:'erro'}  |如果isbackpage为true，就是后台分页，request是必须传参 |
| param  | Object  | {}  |如果isbackpage为true，就是后台分页，param是参数 |
| request.url  | String  |  |请求后台的地址 |
| request.data  | String  | erro |获取list数据的节点 |
| request.param  | Object  | {} | 请求参数 |
#### `emit`方法返回
| 参数名字  | 类型  | 简介  |
| ------------ | ------------ |  ------------ |
| handleSizeChange | number   | 如果isbackpage为false，点击分页数据条触发  |
| handleCurrentChange | number   | 如果isbackpage为false，点击分页页码触发  |
### 内部方法
| 方法名称  | 参数  | 类型  |简介  |
| ------------ | ------------ |------------ |  ------------ |
| delDate | row   |number| 目前仅支持后台动态加载参数，index的参数  |