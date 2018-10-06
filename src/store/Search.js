import TestService from '@/services/TestService'

export default {
  state: {
    search: {
      users: [],
       arguments: {
        firstname: '',
        lastname: ''
      },
      pagination: {
        current: 0,
        itemsByPage: 20,
        totalPages: 0,
        totalItems: 0
      }
    }
  },
  mutations: {
    onSearchStart (state, loadMore = false) {
      this.state.search.pagination.current = loadMore ? this.state.search.pagination.current + 1 : 0
      
      if (!loadMore) this.state.search.users = []
      
      this.state.search.users = this.state.search.users.concat(
        new Array(this.state.search.pagination.itemsByPage).fill(1)
      )
    },
    onSearchComplete (state, response) {
      this.state.search.pagination.totalPages = response.data.pages
      this.state.search.pagination.totalItems = response.data.items
      
      this.state.search.users.splice(-this.state.search.pagination.itemsByPage)
      
      let newUsers = response.data.users.map((value) => {
        return {
          id: value.user_id,
          firstname: value.firstname,
          lastname: value.name,
          phone: value.phone
        }
      });
      
      this.state.search.users = this.state.search.users.concat(newUsers)
    },
    changeSearch (state, search) {
      this.state.search.arguments = { ...this.state.search.arguments, ...search }
    }
  },
  actions: {
    async search ({ commit }, options = { loadMore: false }) {
      commit('onSearchStart', options.loadMore)
      
      const params = {
        search: this.state.search.arguments,
        page: this.state.search.pagination.current,
        limit: this.state.search.pagination.itemsByPage
      }
      
      commit('onSearchComplete', await TestService.fetchPosts(params))
    }
  }
}