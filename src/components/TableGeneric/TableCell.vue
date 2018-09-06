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
    padding: 10px 20px;
    height: 40px;
    vertical-align: middle;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>
