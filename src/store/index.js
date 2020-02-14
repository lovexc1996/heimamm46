// 导入Vue
import Vue from "vue"
// 导入Vuex
import Vuex from "vuex"
// use一下
Vue.use(Vuex)
// 创建爱你仓库对象
const store = new Vuex.Store({
    state:{
        // 用户头像
        userIcon:"",
        // 用户名
        username:""
    },
    mutations:{
        changeIcon(state,newIcon){
            state.userIcon = newIcon
        },
        changName(state,newName){
            state.username = newName
        }
    }
})
// 暴露出去
export default store