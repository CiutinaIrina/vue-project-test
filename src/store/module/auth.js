//import api from '../../api/imgur'

const state = {
    token: null
}

const getters = {
    isLoggedIn : state => !!state.token
}

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
}

const actions = {
    // logout: ({commit}) => {
        // commit('setToken', null)
    // },
    login ({ commit }) {
        //api.login()
        console.log(commit);
        console.log('attempting to log in')
    } 
}

export default {
    // namespaced: true,
    state,
    getters, 
    mutations,
    actions
}