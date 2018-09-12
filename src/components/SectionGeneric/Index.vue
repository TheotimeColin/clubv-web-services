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
      return this.modifiers.map(modifier => `Section--${modifier}`)
    }
  }
}
</script>

<style scoped>
  .Section {
    position: relative;
    overflow-y: auto;
  }
  
  .Section--full {
    background-color: var(--color-background-dark);
  }
  
  .Section--shadow {
    box-shadow: 0 0 55px 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .Section--header {
    display: flex;
    align-items: center;
    height: 250px;
    flex-shrink: 0;
  }
</style>
