import axios from '../axios'

/*
 * 用户管理模块
 */

// 保存
export const save = (data) => {
    return axios({
        url: '/api/sys/user/save/?attachId='+data.attachId,
        method: 'post',
        data
    })
};

// 保存
export const updataStatus = (data) => {
  return axios({
    url: '/api/sys/user/updataStatus/?attachId='+data.attachId,
    method: 'post',
    data
  })
};updataStatus
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/api/sys/user/deletes',
        method: 'post',
      data
    })
};

//重置密码
export const resetPassword = (data) => {
  return axios({
    url: '/api/sys/user/resetPassword',
    method: 'post',
    data
  })
};

// 分页查询
export const findPage = (params) => {
    return axios({
        url: '/api/sys/user/findPage',
        method: 'get',
      params
    })
};
// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
    return axios({
        url: '/api/sys/user/findPermissions',
        method: 'get',
        params
    })
};

// 岗位
export const findPost = (params) => {
  return axios({
    url: '/api/sys/post/queryAll',
    method: 'get',
    params
  })
};

//用户明细
export const findView = (params) => {
  return axios({
    url: '/api/sys/user/view/'+params,
    method: 'get',
    params
  })
};

//分配角色
export const grantRole = (params) => {
  return axios({
    url: '/api/sys/user/grantRole',
    method: 'get',
    params
  })
};

//获取分配的角色
export const toGrantRole = (data) => {
  return axios({
    url: '/api/sys/user/toGrantRole',
    method: 'post',
    data
  })
};

//修改密码
export const changePassword = (data) => {
  return axios({
    url: '/api/sys/user/password',
    method: 'post',
    data
  })
};

//清空特权
export const clearPermissions = (params) => {
  return axios({
    url: '/api/sys/user/clearPermissions',
    method: 'get',
    params
  })
};

//所属子系统
export const changesubSystem = (data) => {
  return axios({
    url: '/api/sys/resource/subSystem',
    method: 'post',
    data
  })
};

/**
 * 获取最大排序号
 * @param params
 * @returns {*|Promise|Promise<any>}
 */
export const getMaxSort = (params) => {
  return axios({
    url: '/api/sys/user/getMaxSort',
    method: 'get',
    params
  })
}

/**
 * 上移下移
 * @param params
 * @returns {*|Promise|Promise<any>}
 */
export  const move = (params) => {
  return axios({
    url: '/api/sys/user/updateSort',
    method: 'get',
    params
  });
}
