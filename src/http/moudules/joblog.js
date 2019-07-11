import axios from "../axios";

/**
 * 日志列表
 * @author huj
 * @data :
 */

export const query = (params) => {
  return axios({
    url: '/api/sys/jobLog/query',
    method: 'get',
    params
  })
}
