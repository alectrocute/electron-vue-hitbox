import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		ui: {
			darkMode: false,
			pageIndex: 0,
			menuExpanded: false
		},
		user: {
			session: {},
			account: {},
			messages: {},
			queue: []
		}
	},
	mutations: {
		toggleDarkMode(state) {
			state.ui.darkMode = !state.ui.darkMode;
		},
		toggleMenuExpanded(state) {
			state.ui.menuExpanded = !state.ui.menuExpanded;
		},
		setPageIndex(state, ind) {
			state.ui.pageIndex = ind;
		}
	},
	actions: {
		toggleDarkMode(state) {
			state.commit("toggleDarkMode");
		},
		toggleMenuExpanded(state) {
			state.commit("toggleMenuExpanded");
		},
		updatePageIndex(state, ind) {
			state.commit("setPageIndex", ind);
			console.log(ind);
		}
	},
	getters: {
		isDarkMode(state) {
			return state.ui.darkMode;
		},
		getPageIndex(state) {
			return state.ui.pageIndex;
		},
		isMenuExpanded(state) {
			return state.ui.menuExpanded;
		}
	},
	modules: {}
});
