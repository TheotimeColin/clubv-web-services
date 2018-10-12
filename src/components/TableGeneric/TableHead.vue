<template>
  <div class="Table_head">
    <TableCell
      v-for="head in rows"
      :style="head.style"
      :head="true"
      :key="head.label"
    >
      {{ head.label }}
    </TableCell>
  </div>
</template>

<script>
import TableCell from './TableCell'
  
export default {
  name: 'TableHead',
  components: { TableCell },
  props: {
    config: { type: Object, default: { rows: [] } },
    lastRow: { type: Boolean, default: false }
  },
  computed: {
    rows () {
      let rows = { ...this.config.rows }
      if (this.lastRow) rows['click'] = { label: '' }
      
      return rows
    }
  }
}
</script>

<style scoped>
  .Table_head {
    display: table-row;
  }
</style>
