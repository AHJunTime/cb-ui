// 分页查询
import axios from '../axios'

/*
 * 用户管理模块
 */

export const findPage = (params) => {
  return axios({
    url: '/api/sys/loginlog/query',
    method: 'get',
    params
  })
};

export const remove = (data) => {
  return axios({
    url: '/api/sys/loginlog/deletes',
    method: 'post',
    data
  })
}
