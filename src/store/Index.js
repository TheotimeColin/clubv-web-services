import Search from './Search'
import User from './User'

export default {
  state: {
    ...Search.state,
    ...User.state
  },
  mutations: {
    ...Search.mutations,
    ...User.mutations
  },
  actions: {
    ...Search.actions,
    ...User.actions
  }
}