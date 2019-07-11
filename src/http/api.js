/*
 * 接口统一集成模块
 */
import * as login from './moudules/login'
import * as user from './moudules/user'
import * as dept from './moudules/dept'
import * as parameter from './moudules/parameter'
import * as role from './moudules/role'
import * as menu from './moudules/menu'
import * as dict from './moudules/dict'
import * as attach from './moudules/attach'
import * as post from './moudules/post'
import * as log from './moudules/log'
import * as loginlog from './moudules/loginlog'
import * as job from './moudules/job'
import * as serialno from './moudules/serialno'
import * as settings from './moudules/settings'
import * as myindex from './moudules/myindex'


// 默认全部导出
export default {
    login,
    user,
    dept,
  parameter,
  post,
    role,
    menu,
    dict,
  attach,
  settings,
    log,
  serialno,
  loginlog,
  job,
  myindex
}
