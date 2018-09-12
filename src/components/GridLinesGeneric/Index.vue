<template>
  <WrapperGeneric class="GridLines">
    <div class="GridLines_line GridLines_line--secondary"></div>
    <div class="GridLines_line"></div>
    <div class="GridLines_line"></div>
    <div class="GridLines_line GridLines_line--secondary"></div>
  </WrapperGeneric>
</template>

<script>
import WrapperGeneric from '@/components/WrapperGeneric'
  
export default {
  name: 'GridLinesGeneric',
  components: { WrapperGeneric }
}
</script>

<style scoped>
  .GridLines {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }
  
  .GridLines_line {
    height: 100%;
    width: 1px;
    background: var(--color-grid-lines);
  }
  
  .GridLines_line--secondary {
    opacity: 0.3;
  }
</style>
