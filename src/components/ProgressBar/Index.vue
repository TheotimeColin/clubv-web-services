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
  
</style>
