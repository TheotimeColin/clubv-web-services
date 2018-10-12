import CitizenService from '@/services/CitizenService'

export default {
  state: {
    search: {
      citizens: [],
      arguments: {
        firstName: '',
        lastName: ''
      },
      pagination: {
        current: 0,
        itemsByPage: 50,
        totalPages: 0,
        totalItems: 0
      }
    }
  },
  mutations: {
    onSearchStart (state, loadMore = false) {
      this.state.search.pagination.current = loadMore ? this.state.search.pagination.current + 1 : 0
      
      if (!loadMore) this.state.search.citizens = []
      
      this.state.search.citizens = this.state.search.citizens.concat(
        new Array(this.state.search.pagination.itemsByPage).fill(1)
      )
    },
    onSearchComplete (state, response) {
      this.state.search.pagination.totalPages = response.data.pages
      this.state.search.pagination.totalItems = response.data.items
      
      this.state.search.citizens.splice(-this.state.search.pagination.itemsByPage)
      
      let newCitizens = response.data.citizens.map((value) => {
        return {
          id: value.id,
          firstName: value.firstName,
          lastName: value.lastName,
          phone: value.phone
        }
      });
      
      this.state.search.citizens = this.state.search.citizens.concat(newCitizens)
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
      
      commit('onSearchComplete', await CitizenService.fetchCitizens(params))
    },
    async getCitizen({ commit }, phone) {
      let citizen = await CitizenService.getCitizen(phone)
      return citizen.data
    }
  }
}