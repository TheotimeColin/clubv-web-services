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
    background-image: url("../../assets/img/patterns/topographic-2.png");
    background-size: 300px;
    opacity: 0.03;
    pointer-events: none;
  }
</style>
