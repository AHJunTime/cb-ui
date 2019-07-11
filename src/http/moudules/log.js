import axios from '../axios'

/*
 * 日志管理模块
 */

// 分页查询
export const findPage = (params) => {
    return axios({
        url: '/api/sys/log/query',
        method: 'get',
      params
    })
};

// 删除
export const doDelete = (data) => {
  return axios({
    url: '/api/sys/log/deletes',
    method: 'post',
    data
  })
};

