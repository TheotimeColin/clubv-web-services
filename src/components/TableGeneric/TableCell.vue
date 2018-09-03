<template>
  <td class="TableCell">
    <slot></slot>
  </td>
</template>

<script>
export default {
  name: 'TableCell',
}
</script>

<style scoped>
  .TableCell {
    padding: 8px 12px;
    height: 40px;
    vertical-align: middle;
  }
</style>
