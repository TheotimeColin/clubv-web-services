<template>
  <div class="Table">
    <div class="Table_row" v-for="row in finalData">
        <TableCell v-for="cell in row" :style="cell.style">
          {{ cell.value }}
          <TextPlaceholder :display="cell.value == ''"/>
        </TableCell>
      <TableCell class="Table_click" v-if="clickable">
        <router-link :to="routerLink(row)"><IconGeneric name="arrowRightWhite" :width="12"/></router-link>
      </TableCell>
    </div>
  </div>
</template>

<script>
import slugify from '@sindresorhus/slugify'
  
import IconGeneric from '@/components/IconGeneric'
import TextPlaceholder from '@/components/Loaders/TextPlaceholder'
import TableCell from './TableCell'

export default {
  name: 'TableGeneric',
  components: { TableCell, IconGeneric, TextPlaceholder },
  props: {
    data: { type: Array, required: true, default: () => [] },
    clickable: { type: Boolean, default: false },
    config: { type: Object, default: { rows: [] } },
    loading: { type: Boolean, default: false }
  },
  computed: {
    finalData () {
      return this.data.map((single) => {
        let data = {}

        Object.keys(this.config.rows).forEach((key) => {
          data[key] = {
            style: this.config.rows[key].style,
            value: single[key] ? single[key] : ''
          }
        })

        return data
      })
    }
  },
  methods: {
    routerLink(row) {
      let link = this.config.link.base
      let parameters = this.config.link.parameters.map((param) => row[param].value)
      
      return link + slugify(parameters.join('-'))
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
  
  .Table_click {
    width: 65px;
    text-align: center;
  }
</style>
