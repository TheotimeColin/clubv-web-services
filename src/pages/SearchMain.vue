<template>
  <div class="Test">
    <SearchTable
      :config="config"
      :data="users"
      :displayLoading="state.isLoading"
      :pages="pages"
      @load-more="() => onLoadMore()"
      @on-scroll="(percentage) => onProgress(percentage)"
    />

    <ProgressBar :progress="state.progress" />
  </div>
</template>

<script>
import TestService from '@/services/TestService'
  
import SearchTable from '@/layout/SearchTable'
import ProgressBar from '@/components/ProgressBar'
  
export default {
  name: 'SearchMain',
  components: { SearchTable, ProgressBar },
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      state: {
        isLoading: false,
        progress: 0
      },
      search: {},
      users: [],
      pages: {
        current: 0,
        max: 0,
        items: 0,
        itemsByPage: 20
      },
      config: {
        link: {
          base: '/records/',
          parameters: ['id', 'lastname']
        },
        rows: {
          id: { label: 'ID', style: { width: '100px', textAlign: 'center' } },
          firstname: { label: 'Prénom', style: { width: '35%' } },
          lastname: { label: 'Nom', style: { width: '35%', textTransform: 'uppercase', fontWeight: 800 } },
          phone: { label: 'Téléphone', style: { whiteSpace: 'nowrap', textAlign: 'center' } }
        }
      }
    }
  },
  computed: {
    hasProgressed () {
      return this.state.progress > 0 ? true : false
    }
  },
  methods: {
    async getPosts (append = false) {
      if (!append) this.$set(this.pages, 'current', 0)
      
      const params = {
        search: this.search,
        page: this.pages.current,
        limit: this.pages.itemsByPage
      }
      
      this.$set(this.state, 'isLoading', true)
      
      this.$set(this, 'users', this.users.concat(new Array(this.pages.itemsByPage).fill(1)))
      
      await new Promise((resolve) => setTimeout(() => resolve(), 1000));
      
      const response = await TestService.fetchPosts(params)
      this.$set(this.state, 'isLoading', false)
      this.$set(this.pages, 'max', response.data.pages)
      this.$set(this.pages, 'items', response.data.items)
      
      const current = append ? this.users : []
      
      response.data.users.forEach((value, i) => {
        setTimeout(() => {
          let newTable = this.users.slice();

          newTable[this.pages.current * this.pages.itemsByPage + i] = {
            id: value.user_id,
            firstname: value.firstname,
            lastname: value.name,
            phone: value.phone
          }

          this.$set(this, 'users', newTable)
        }, i * 100)
      })
      
      
    },
    async onSubmitSearch() {
      this.getPosts()
    },
    onChangeSearch(search) {
      this.$set(this, 'search', { ...this.search, ...search })
    },
    onLoadMore() {
      this.$set(this.pages, 'current', this.pages.current + 1)
      this.getPosts(true)
    },
    onProgress(percentage) {
      const currentItems = this.pages.itemsByPage * (this.pages.current + 1)
      const maxItems = this.pages.itemsByPage * (this.pages.max + 1)
      
      this.$set(this.state, 'progress', (percentage * currentItems) / maxItems)
    }
  }
}
</script>

<style scoped>
  .Test {
    height: 100%;
  }
</style>
