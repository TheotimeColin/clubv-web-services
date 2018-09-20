<template>
  <div class="Pattern"></div>
</template>

<script>
export default {
  name: 'PatternGeneric',
}
</script>

<style scoped>
  .Pattern {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("../../assets/img/patterns/topographic-1.svg");
    background-size: 400px;
    opacity: 0.05;
    pointer-events: none;
  }
</style>
