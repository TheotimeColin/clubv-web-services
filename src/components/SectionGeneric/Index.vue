<template>
  <div
    class="SectionGeneric"
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
  
import ClassesMixin from '@/mixins/Classes'
  
export default {
  name: 'SectionGeneric',
  components: { PatternGeneric, GridLinesGeneric },
  mixins: [ ClassesMixin ],
  props: {
    modifiers: { type: Array, default: () => [] },
    pattern: { type: Boolean, default: false },
    lines: { type: Boolean, default: false },
  }
}
</script>

<style scoped>
  .SectionGeneric {
    position: relative;
    overflow: hidden;
  }
  
  .SectionGeneric--full {
    display: flex;
    background-color: var(--color-background-dark);
  }
  
  .SectionGeneric--no-overflow {
    overflow: hidden;
  }
  
  .SectionGeneric--header {
    display: flex;
    align-items: center;
    height: 200px;
    flex-shrink: 0;
    transition: height 200ms ease;
    border-bottom: 1px solid var(--color-grid-lines);
  }
  
  .SectionGeneric--header-mini {
    height: 100px;
  }
  
  .SectionGeneric--header-hidden {
    display: none;
  }
</style>
