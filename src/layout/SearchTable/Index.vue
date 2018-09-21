<template>
  <SectionGeneric class="SearchTable" :modifiers="[ 'full' ]">
    <LoadOverlay v-if="displayLoading" />

    <div class="ScrollView" @scroll="(e) => this.onScroll(e)">
      <TableHead :config="config" />
      
      <div class="ScrollView_view">
        <TableGeneric :data="data" :config="config" :clickable="true" />
        <LoadMore @load-more="() => this.onLoadMore()" v-if="pages.current < pages.max">Charger plus ({{ pages.items }} entrées restantes)</LoadMore>
      </div>
    </div>
  </SectionGeneric>
</template>

<script>
import TableGeneric from '@/components/TableGeneric'
import TableHead from '@/components/TableGeneric/TableHead'
import SectionGeneric from '@/components/SectionGeneric'
import LoadMore from '@/components/LoadMore'
import LoadOverlay from '@/components/LoadOverlay'

export default {
  name: 'SearchMain',
  components: { TableGeneric, SectionGeneric, LoadMore, LoadOverlay, TableHead },
  props: {
    displayLoading: { type: Boolean, default: false },
    pages: { type: Object, default: () => ({ current: 0, max: 0, items: 0 }) },
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
  .ScrollView {
    margin-top: 33px;
    width: 100%;
    overflow-y: scroll;
  }
</style>
