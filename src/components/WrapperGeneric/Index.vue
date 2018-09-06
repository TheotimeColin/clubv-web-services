<template>
  <div class="Wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WrapperGeneric',
}
</script>

<style scoped>
  .Wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
