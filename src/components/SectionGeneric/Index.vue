<template>
  <div
    class="Section"
    :class="classes"
  >
    <PatternGeneric v-if="pattern" />
    <GridLinesGeneric v-if="lines" />
    <slot></slot>
  </div>
</template>

<script>
import PatternGeneric from '@/components/PatternGeneric'
import GridLinesGeneric from '@/components/GridLinesGeneric'
  
export default {
  name: 'SectionGeneric',
  components: { PatternGeneric, GridLinesGeneric },
  props: {
    modifiers: { type: Array, default: () => [] },
    pattern: { type: Boolean, default: false },
    lines: { type: Boolean, default: false },
  },
  computed: {
    classes () {
      return this.modifiers.map((modifier) => {
        if (modifier.name) {
          return modifier.active ? `Section--${modifier.name}` : ''
        } else {
          return `Section--${modifier}`
        }
      })
    }
  }
}
</script>

<style scoped>
  .Section {
    position: relative;
    overflow: hidden;
  }
  
  .Section--full {
    display: flex;
    background-color: var(--color-background-dark);
  }
  
  .Section--no-overflow {
    overflow: hidden;
  }
  
  .Section--header {
    display: flex;
    align-items: center;
    height: 200px;
    flex-shrink: 0;
    transition: height 200ms ease;
  }
  
  .Section--header-mini {
    height: 100px;
  }
</style>
