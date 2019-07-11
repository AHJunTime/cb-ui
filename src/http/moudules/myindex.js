import axios from '../axios'

/**
 *
 * @author huj
 * @data :
 */
export const showmain = (params) => {
  return axios({
    url: 'https://frp.creatorblue.com/console/index-api/',
    method: 'get',
    params
  })
}

