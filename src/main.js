import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'

console.log("环境变量=>", import.meta.env)

const app = createApp(App) // 因为后续还需要导入其他东西，为了方便，这边把creatApp提出来了。

// 全局挂载request
app.config.globalProperties.$request = request

app.use(router).mount('#app')
app.use(ElementPlus)