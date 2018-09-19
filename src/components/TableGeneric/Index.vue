<template>
  <div class="Table">
    <table class="Table_head">
      <TableCell v-for="head in config.rows" :style="head.style" :head="true">{{ head.label }}</TableCell>
    </table>
    <div class="Table_scroll">
      <table class="Table_data">
        <tr v-for="row in finalData">
          <TableCell v-for="property in row" :style="property.style">
            {{ property.value }}
          </TableCell>
        </tr>
      </table>
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
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .Table_data,
  .Table_head {
    width: 100%;
    border-spacing: 0;
  }
  
  .Table tr:nth-of-type(odd) {
    background-color: var(--color-background-light);
  }
</style>
