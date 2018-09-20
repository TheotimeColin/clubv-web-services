<template>
  <div class="Table">
    <div class="Table_row" v-for="row in finalData">
      <TableCell v-for="cell in row" :style="cell.style">
        {{ cell.value }}
      </TableCell>
    </div>
  </div>
</template>

<script>
import TableCell from './TableCell'
  
export default {
  name: 'TableGeneric',
  components: { TableCell },
  props: {
    data: { type: Array, required: true, default: () => [] },
    config: { type: Object, default: { rows: [] } }
  },
  computed: {
    finalData () {
      return this.data.map((single) => {
        let data = {}
        
        Object.keys(single).forEach((key) => {
          data[key] = {
            style: this.config.rows[key].style,
            value: single[key]
          }
        })
        
        return data
      })
    }
  }
}
</script>

<style scoped>
  .Table {
    position: relative;
    display: table;
    width: 100%;
  }
  
  .Table .Table_row:nth-of-type(odd) {
    background-color: var(--color-background-light);
  }
  
  .Table_row {
    display: table-row;
  }
</style>
