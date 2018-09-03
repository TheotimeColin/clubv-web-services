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
    width: 90%;
    margin: 0 auto;
  }
</style>
