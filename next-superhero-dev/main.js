import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.SERVER_URL = "https://m.aidalan.com"; // 生产环境url
// Vue.prototype.SERVER_URL = "https://m.aidalan.com"; // 开发环境url

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
