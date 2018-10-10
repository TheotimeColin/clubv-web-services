<template>
  <div class="SearchTable">

    <div class="ScrollView" @scroll="(e) => this.onScroll(e)">
      
      <div class="ScrollView_view">
        <TableGeneric :data="data" :config="config" :clickable="true" :loading="displayLoading" :pagination="pages"/>
        <LoadMore @load-more="() => this.onLoadMore()" v-if="pages.current < pages.totalPages">Charger plus ({{ pages.totalItems }} entrées restantes)</LoadMore>
      </div>
    </div>
  </div>
</template>

<script>
import TableGeneric from '@/components/TableGeneric'
import SectionGeneric from '@/components/SectionGeneric'
import LoadMore from '@/components/LoadMore'

export default {
  name: 'SearchMain',
  components: { TableGeneric, SectionGeneric, LoadMore },
  props: {
    displayLoading: { type: Boolean, default: false },
    pages: { type: Object, default: () => ({ current: 0, totalPages: 0, totalItems: 0 }) },
    data: { type: Array, default: () => [] },
    config: { type: Object, default: () => {} }
  },
  methods: {
    onLoadMore() {
      this.$emit('load-more')
    },
    onScroll(e) {
      this.$emit('on-scroll', e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))
    }
  }
}
</script>

<style scoped>
  .SearchTable {
    height: 100%;
  }
  
  .ScrollView {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
</style>
