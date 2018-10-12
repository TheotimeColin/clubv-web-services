<template>
  <div class="FormBlock">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FormBlock',
  components: {}
}
</script>

<style scoped>
  .FormBlock {
    max-width: 500px;
    margin: 0 auto;
    background-color: var(--color-background-white);
  }
</style>