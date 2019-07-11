import axios from '../axios'

/* 
 * 附件管理模块
 */

// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/api/sys/attach/deletes',
        method: 'delete',
        data
    })
}
// 分页查询
export const findPage = (params) => {
  return axios({
    url: '/api/sys/attach/query',
    method: 'get',
    params
  })
}
