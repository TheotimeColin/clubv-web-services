<template>
  <div class="ProgressBar" :style="{ transform: `scaleX(${ progress })` }"></div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
  .ProgressBar {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 5px;
    width: 100%;
    transform-origin: left;
    background: var(--color-gradient-main);
  }
</style>
