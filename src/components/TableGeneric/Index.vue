<template>
  <table class="Table">
    <thead>
      <td v-for="head in config.rows">{{ head.label }}</td>
    </thead>
    <tr v-for="row in finalData">
      <TableCell v-for="property in row" :style="property.style">
        {{ property.value }}
      </TableCell>
    </tr>
  </table>
</template>

<script>
import TableCell from './TableCell'
  
export default {
  name: 'TableGeneric',
  components: { TableCell },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    config: {
      type: Object,
      default: {
        rows: []
      }
    }
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
    width: 100%;
    border-spacing: 0;
  }
  
  .Table tr:nth-of-type(odd) {
    background: #f7f7f7;
  }
</style>
