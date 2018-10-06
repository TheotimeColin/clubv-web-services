<template>
  <div class="TableCell" :class="[ { 'TableCell--head': head }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TableCell',
  props: {
    head: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
  .TableCell {
    padding: 20px;
    min-height: 60px;
    display: table-cell;
    border-right: 1px solid var(--color-grid-lines);
  }
  
  .TableCell--head {
    font-size: var(font-size-small);
    padding: 8px;
    height: auto;
    border-bottom: 1px solid var(--color-grid-lines);
    background-color: var(--color-background-darker);
  }
</style>
