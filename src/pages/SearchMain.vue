<template>
  <div class="Test">
    <SearchTable
      :config="config"
      :data="users"
      :displayLoading="state.isLoading"
      :pages="pagination"
      @load-more="() => onLoadMore()"
      @on-scroll="(percentage) => onProgress(percentage)"
    />

    <ProgressBar :progress="state.progress" />
  </div>
</template>

<script>
import SearchTable from '@/layout/SearchTable'
import ProgressBar from '@/components/ProgressBar'
  
export default {
  name: 'SearchMain',
  components: { SearchTable, ProgressBar },
  mounted () {
    this.$store.dispatch('search')
  },
  data () {
    return {
      state: {
        isLoading: false,
        progress: 0
      },
      config: {
        link: {
          base: '/records/',
          parameters: ['phone', 'lastName']
        },
        rows: {
          phone: { label: 'Téléphone', placeholder: '000-0000', style: { whiteSpace: 'nowrap', textAlign: 'center' } },
          firstName: { label: 'Prénom', style: { width: '35%' } },
          lastName: { label: 'Nom', style: { width: '35%', textTransform: 'uppercase', fontWeight: 800 } },
        }
      }
    }
  },
  computed: {
    hasProgressed () {
      return this.state.progress > 0 ? true : false
    },
    users () {
      return this.$store.state.search.citizens
    },
    pagination () {
      return this.$store.state.search.pagination
    }
  },
  methods: {
    onLoadMore() {
      this.$store.dispatch('search', {
        loadMore: true
      })
    },
    onProgress(percentage) {
      const currentItems = this.users.length
      const maxItems = this.pagination.itemsByPage * (this.pagination.totalItems + 1)
      
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
