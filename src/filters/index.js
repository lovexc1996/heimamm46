// 导入Vue
import Vue from 'vue'

// 导入 monent.js
import monent from 'moment'
// 注册全局过滤器 处理日期
Vue.filter('formatTime', value => {
    // 日期格式
    // YYYY年
    // MM月
    // DD日
    return monent(value).format('YYYY年MM月DD日')
})