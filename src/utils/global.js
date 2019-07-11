/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

 // 后台管理系统服务器地址
export const baseUrl = process.env.baseUrl
//export const baseUrl = 'http://localhost:9084/console'
export const baseUrlUpload = process.env.baseUrlUpload

//字典图标显示地址
export const  baseDictUrl= process.env.baseUrl + '/uploads/dict/';
//字典图标上传地址
export const  baseDictUploaderUrl= process.env.baseUrl + '/api/sys/dict/uploadIcon';

//export const baseUrl = 'http://139.196.87.48:8001'

 // 系统数据备份还原服务器地址
export const backupBaseUrl = process.env.baseUrl
// export const backupBaseUrl = 'http://localhost:8002'

export default {
    baseUrl,
    backupBaseUrl
}
