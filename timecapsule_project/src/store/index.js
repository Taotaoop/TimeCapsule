import { createStore } from 'vuex'

export default createStore({
 state: {
		isLogin: false
	},

	// 获取属性的状态
	getters: {
		isLogin: state => state.isLogin
	},
	// 设置属性状态
	mutations: {
		userStatus(state, flag) {
			state.isLogin = flag;
		}
	},

	actions: {
		// 获取登录状态
		setUser({commit}, flag) {
			commit("userStaus", flag)
		}
	}

})
