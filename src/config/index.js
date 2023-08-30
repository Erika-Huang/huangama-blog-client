/**
 * 环境配置封装
 * @date 2023/8/12
 * @author 黄阿玛 Erika 
 * 掘金：https://juejin.cn/user/2606266581532221/posts
 * GitHub：https://github.com/Erika-Huang
 * 
 */

// 获取我们的环境变量
const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
    // 开发环境
    dev: {
        baseApi: '/api',
        mockApi: ' https://mock.presstime.cn/mock/64ef6642ad51c7ed94185b83/api'
    },
    // 测试环境
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: ' https://mock.presstime.cn/mock/64ef6642ad51c7ed94185b83/api'
    },
    // 生产环境
    prod: {
        baseApi: '/futurefe.com/api',
        mockApi: ''
    }
}
export default {
    env,
    mock: true,
    namespace:'manager', //命名空间
    ...EnvConfig[env] //接口的调用地址
}
