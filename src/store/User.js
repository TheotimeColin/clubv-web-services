import UserService from '@/services/UserService'

export default {
  state: {
    user: {
      
    }
  },
  mutations: {
    
  },
  actions: {
    async registerUser ({ commit }, options) {
      return UserService.registerUser(options)
    }
  }
}