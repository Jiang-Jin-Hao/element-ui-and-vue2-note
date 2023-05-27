import Vue from 'vue'

// 1.引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用第三方图标库
import 'font-awesome/css/font-awesome.min.css'

// 引用了同级目录下的App.vue文件
import App from './App.vue'

// axios

// 默认请求路径
axios.defaults.baseURL = 'http://localhost:8081/'

// 将axios作为全局的自定义属性
Vue.prototype.$http = axios

// 1.导入Axios
import axios from 'axios'

Vue.config.productionTip = false

// 2.使用element-ui，注册（全局注册），相当于Movie.vue里的components{}（局部注册）
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
}).$mount('#app')


