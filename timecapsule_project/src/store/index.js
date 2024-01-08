import { createStore } from 'vuex'

export default createStore({
 state: {
		isLogin: false
	},

	// ��ȡ���Ե�״̬
	getters: {
		isLogin: state => state.isLogin
	},
	// ��������״̬
	mutations: {
		userStatus(state, flag) {
			state.isLogin = flag;
		}
	},

	actions: {
		// ��ȡ��¼״̬
		setUser({commit}, flag) {
			commit("userStaus", flag)
		}
	}

})
