<template>
  <div class="FormBlock">
    <slot name="top"></slot>
    
    <div class="FormBlock_container">
      <slot></slot>
    </div>
    
    <slot name="bottom"></slot>
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
    overflow: auto;
    background-color: var(--color-background-white);
  }
  
  .FormBlock_container {
    max-width: 400px;
    width: 95%;
    margin: 0 auto;
  }
</style>