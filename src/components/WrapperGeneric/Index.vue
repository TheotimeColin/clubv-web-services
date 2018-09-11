<template>
  <div
    class="Wrapper"
    :class="classes"
  >
    <PatternGeneric v-if="pattern" />
    <slot></slot>
  </div>
</template>

<script>
import PatternGeneric from '@/components/PatternGeneric'
  
export default {
  name: 'WrapperGeneric',
  components: { PatternGeneric },
  props: {
    modifiers: { type: Array, default: () => [] },
    pattern: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      return this.modifiers.map(modifier => `Wrapper--${modifier}`)
    }
  }
}
</script>

<style scoped>
  .Wrapper {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow-y: auto;
  }
  
  .Wrapper--full {
    background-color: var(--color-background-dark);
  }
  
  .Wrapper--shadow {
    box-shadow: 0 0 55px 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .Wrapper--header {
    display: flex;
    align-items: center;
    height: 150px;
    flex-shrink: 0;
  }
</style>
