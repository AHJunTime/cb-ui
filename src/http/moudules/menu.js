import axios from '../axios'

/*
 * 菜单管理模块
 */
 // 生成
export const init = (data) => {
  if(data){
    return axios({
      url: '/api/sys/resource/init/'+data,
      method: 'post',
      data
    })
   }
}
// 树拖拽
export const updateDrag = (data) => {
  return axios({
    url: '/api/sys/resource/drag',
    method: 'post',
    data
  })
}
// 树上下移
export const move = (data) => {
  return axios({
    url: '/api/sys/resource/clickDrag',
    method: 'post',
    data
  })
}
// 保存
export const save = (data) => {
  return axios({
    url: '/api/sys/resource/saveOrUpdate',
    method: 'post',
    data
  })
}
// 删除
export const batchDelete = (data) => {
  if(data){
    return axios({
      url: '/api/sys/resource/delete/'+data,
      method: 'delete'
    })
  }
}
// 查找导航菜单树
export const findNavTree = (params) => {
    return axios({
        url: '/api/menu/findNavTree',
        method: 'get',
        params
    })
};
/*export const findNavTree = (params) => {
  return axios({
    url: '/menu/findNavTree',
    method: 'get',
    params
  })
}
// 查找菜单树dictName

}*/

// 查找菜单树
export const findMenuTree = (params) => {
  return axios({
    url: '/api/sys/resource/query',
    method: 'get',
    params
  })
}
// 查找显示的菜单树
export const findMenuTreeShow = (params) => {
  return axios({
    url: '/api/sys/resource/queryLinkDisplay',
    method: 'get',
    params
  })
}


/*export const findNavTree = (params) => {
  return axios({
    url: '/menu/findNavTree',
    method: 'get',
    params
  })
<<<<<<< HEAD
};
=======
}

export const findMenuTree = (data) => {
    return axios({
        url: '/menu/findMenuTree',
        method: 'get',
        data
    })
}*/

