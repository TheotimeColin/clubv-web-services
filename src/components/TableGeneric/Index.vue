<template>
  <div class="Table">
    <TableHead :config="config" :last-row="clickable" />
    <div class="Table_row" v-for="(row, i) in finalData">
      <TableCell v-for="cell in row" :style="cell.style" :key="cell.label">
          <TextPlaceholder
            class="Table_placeholder"
            :display="cell.value == ''"
            :placeholder="cell.placeholder"
            :delay="delay(i)"
          >
              {{ cell.value }}
          </TextPlaceholder>
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
import TableHead from './TableHead'

export default {
  name: 'TableGeneric',
  components: { TableCell, IconGeneric, TextPlaceholder, TableHead },
  props: {
    data: { type: Array, required: true, default: () => [] },
    clickable: { type: Boolean, default: false },
    config: { type: Object, default: { rows: [] } },
    loading: { type: Boolean, default: false },
    pagination: { type: Object },
    animationDelay: { type: Number, default: 100 }
  },
  computed: {
    finalData () {
      return this.data.map((single) => {
        let data = {}

        Object.keys(this.config.rows).forEach((key) => {
          data[key] = {
            ...this.config.rows[key],
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
    },
    delay (id) {
      if (!this.pagination) return 0
      
      let position = id - (this.pagination.current * this.pagination.itemsByPage)
      
      return position <= 0 || position > 12 ? 0 : position * this.animationDelay
    }
  }
}
</script>

<style scoped>
  .Table {
    position: relative;
    display: table;
    width: 100%;
    font-size: var(--font-size-big);
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
