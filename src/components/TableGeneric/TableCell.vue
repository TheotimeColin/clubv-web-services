<template>
  <td class="TableCell" :class="[ { 'TableCell--head': head }]">
    <slot></slot>
  </td>
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
    padding: 10px 20px;
    height: 40px;
    vertical-align: middle;
    border-right: 1px solid var(--color-grid-lines);
  }
  
  .TableCell--head {
    font-size: 16px;
    border-bottom: 1px solid var(--color-grid-lines);
    background-color: var(--color-background-darker);
  }
</style>
