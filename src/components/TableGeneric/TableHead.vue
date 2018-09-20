<template>
  <div class="Table_head">
    <TableCell v-for="head in config.rows" :style="head.style" :head="true">{{ head.label }}</TableCell>
  </div>
</template>

<script>
import TableCell from './TableCell'
  
export default {
  name: 'TableHead',
  components: { TableCell },
  props: {
    config: { type: Object, default: { rows: [] } }
  }
}
</script>

<style scoped>
  .Table_head {
    display: table;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 5;
  }
</style>
